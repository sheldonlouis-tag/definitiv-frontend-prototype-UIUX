<script lang="ts">
  import { PageHeader } from '$lib/components/layout/index.js';
  import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import { Input } from '$lib/components/ui/input/index.js';
  import { Label } from '$lib/components/ui/label/index.js';
  import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs/index.js';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Separator } from '$lib/components/ui/separator/index.js';
  import { Avatar } from '$lib/components/ui/avatar/index.js';
  import { Edit, Phone, Mail, MapPin, Calendar, Building, User, Save, X, Plus } from 'lucide-svelte';

  // Mock employee data - enhanced from the image
  let employeeData = $state({
    primaryDetails: {
      employeeNumber: '000513',
      title: 'Mr',
      firstName: 'Adrian',
      middleName: '',
      surname: 'Glencross',
      preferredName: 'Adrian',
      dateOfBirth: '15/12/1962',
      gender: 'Male'
    },
    contactDetails: {
      primaryEmail: 'sheldon.louis@theaccessgroup.com',
      mobilePhone: '0412 521 062',
      homeAddress: {
        street: '50 Kings Park Road',
        suburb: 'West Perth',
        postcode: '6005',
        state: 'Western Australia',
        country: 'Australia'
      }
    },
    accountDetails: {
      username: 'adrian.glencross',
      lastLogin: '2025-01-15 09:30',
      accountStatus: 'Active',
      permissions: ['Employee Self Service', 'Leave Management'],
      twoFactorEnabled: true
    },
    emergencyContacts: [
      {
        id: '1',
        name: 'Sarah Glencross',
        relationship: 'Spouse',
        phone: '0412 987 654',
        email: 'sarah.glencross@email.com',
        isPrimary: true
      },
      {
        id: '2',
        name: 'John Glencross',
        relationship: 'Brother',
        phone: '0412 555 123',
        email: 'john.glencross@email.com',
        isPrimary: false
      }
    ]
  });

  let activeTab = $state('primary-details');
  let editMode = $state(false);
  let editingContact = $state<string | null>(null);

  function toggleEditMode() {
    editMode = !editMode;
  }

  function saveChanges() {
    // Here you would typically save to backend
    editMode = false;
    // Show success message
  }

  function cancelEdit() {
    editMode = false;
    // Reset any changes
  }

  function addEmergencyContact() {
    const newContact = {
      id: Date.now().toString(),
      name: '',
      relationship: '',
      phone: '',
      email: '',
      isPrimary: false
    };
    employeeData.emergencyContacts = [...employeeData.emergencyContacts, newContact];
    editingContact = newContact.id;
  }

  function deleteEmergencyContact(id: string) {
    employeeData.emergencyContacts = employeeData.emergencyContacts.filter(contact => contact.id !== id);
  }

  function setPrimaryContact(id: string) {
    employeeData.emergencyContacts = employeeData.emergencyContacts.map(contact => ({
      ...contact,
      isPrimary: contact.id === id
    }));
  }
</script>

<div class="page-container">
  <div class="page-content">
    <!-- Header -->
    <div class="page-header-with-breadcrumbs">
      <PageHeader 
        title="My Details" 
        subtitle="View and manage your personal information"
        breadcrumbs={[
          { label: 'Employee Hub', href: '/employee' },
          { label: 'Employee', href: '/employee/employee' },
          { label: 'My Details' }
        ]}
      />
      <Button onclick={toggleEditMode} variant={editMode ? 'outline' : 'default'}>
        {#if editMode}
          <X class="w-4 h-4 mr-2" />
          Cancel
        {:else}
          <Edit class="w-4 h-4 mr-2" />
          Edit Details
        {/if}
      </Button>
    </div>

    <!-- Employee Profile Header -->
    <div class="card-container">
      <Card class="card">
        <CardContent class="card-content">
          <div class="flex items-center gap-4">
            <Avatar class="h-16 w-16">
              <div class="h-full w-full bg-primary/10 flex items-center justify-center">
                <User class="h-8 w-8 text-primary" />
              </div>
            </Avatar>
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-1">
                <h1 class="text-xl font-bold">{employeeData.primaryDetails.firstName} {employeeData.primaryDetails.surname}</h1>
                <Badge variant="secondary" class="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Active Employee
                </Badge>
              </div>
              <div class="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div class="flex items-center gap-1">
                  <User class="w-4 h-4" />
                  Employee #{employeeData.primaryDetails.employeeNumber}
                </div>
                <div class="flex items-center gap-1">
                  <Mail class="w-4 h-4" />
                  {employeeData.contactDetails.primaryEmail}
                </div>
                <div class="flex items-center gap-1">
                  <Phone class="w-4 h-4" />
                  {employeeData.contactDetails.mobilePhone}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    <!-- Tabbed Content -->
    <div class="card-container">
      <Card class="card">
        <CardContent class="card-content">
          <Tabs bind:value={activeTab}>
            <TabsList class="grid w-full grid-cols-4 bg-transparent border-b border-border p-0 h-auto rounded-none">
              <TabsTrigger 
                value="primary-details" 
                class="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary bg-transparent shadow-none px-4 py-3 font-medium"
              >
                Primary Details
              </TabsTrigger>
              <TabsTrigger 
                value="contact-details"
                class="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary bg-transparent shadow-none px-4 py-3 font-medium"
              >
                Contact Details
              </TabsTrigger>
              <TabsTrigger 
                value="account-details"
                class="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary bg-transparent shadow-none px-4 py-3 font-medium"
              >
                Account Details
              </TabsTrigger>
              <TabsTrigger 
                value="emergency-contacts"
                class="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary bg-transparent shadow-none px-4 py-3 font-medium"
              >
                Emergency Contacts
              </TabsTrigger>
            </TabsList>

            <!-- Primary Details Tab -->
            <TabsContent value="primary-details" class="space-y-6 mt-6">
              <div class="form-field-group">
                <div class="form-grid-2">
                  <div class="form-field">
                    <Label for="employeeNumber">Employee Number</Label>
                    <div class="flex gap-2">
                      <Input 
                        id="employeeNumber" 
                        value={employeeData.primaryDetails.employeeNumber} 
                        readonly 
                        class="flex-1"
                      />
                      {#if editMode}
                        <Button variant="outline" size="sm">
                          <Edit class="w-4 h-4" />
                        </Button>
                      {/if}
                    </div>
                  </div>
                  <div class="form-field">
                    <Label for="title">Title</Label>
                    {#if editMode}
                      <select 
                        id="title"
                        bind:value={employeeData.primaryDetails.title}
                        class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 [&>option]:bg-card"
                      >
                        <option value="">- Select -</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Ms">Ms</option>
                        <option value="Dr">Dr</option>
                        <option value="Prof">Prof</option>
                      </select>
                    {:else}
                      <Input id="title" value={employeeData.primaryDetails.title} readonly />
                    {/if}
                  </div>
                </div>

                <div class="form-grid-2">
                  <div class="form-field">
                    <Label for="firstName">First Name</Label>
                    {#if editMode}
                      <Input id="firstName" bind:value={employeeData.primaryDetails.firstName} />
                    {:else}
                      <Input id="firstName" value={employeeData.primaryDetails.firstName} readonly />
                    {/if}
                  </div>
                  <div class="form-field">
                    <Label for="middleName">Middle Name</Label>
                    {#if editMode}
                      <Input id="middleName" bind:value={employeeData.primaryDetails.middleName} />
                    {:else}
                      <Input id="middleName" value={employeeData.primaryDetails.middleName || 'Not specified'} readonly />
                    {/if}
                  </div>
                </div>

                <div class="form-grid-2">
                  <div class="form-field">
                    <Label for="surname">Surname</Label>
                    {#if editMode}
                      <Input id="surname" bind:value={employeeData.primaryDetails.surname} />
                    {:else}
                      <Input id="surname" value={employeeData.primaryDetails.surname} readonly />
                    {/if}
                  </div>
                  <div class="form-field">
                    <Label for="preferredName">Preferred Name</Label>
                    {#if editMode}
                      <Input id="preferredName" bind:value={employeeData.primaryDetails.preferredName} />
                    {:else}
                      <Input id="preferredName" value={employeeData.primaryDetails.preferredName} readonly />
                    {/if}
                  </div>
                </div>

                <div class="form-grid-2">
                  <div class="form-field">
                    <Label for="dateOfBirth">Date of Birth (DD/MM/YYYY)</Label>
                    {#if editMode}
                      <Input id="dateOfBirth" bind:value={employeeData.primaryDetails.dateOfBirth} placeholder="DD/MM/YYYY" />
                    {:else}
                      <Input id="dateOfBirth" value={employeeData.primaryDetails.dateOfBirth} readonly />
                    {/if}
                  </div>
                  <div class="form-field">
                    <Label for="gender">Gender</Label>
                    {#if editMode}
                      <select 
                        id="gender"
                        bind:value={employeeData.primaryDetails.gender}
                        class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 [&>option]:bg-card"
                      >
                        <option value="">- Select -</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                      </select>
                    {:else}
                      <Input id="gender" value={employeeData.primaryDetails.gender} readonly />
                    {/if}
                  </div>
                </div>
              </div>

              {#if editMode}
                <div class="flex justify-end gap-3 pt-4">
                  <Button variant="outline" onclick={cancelEdit}>
                    <X class="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                  <Button onclick={saveChanges}>
                    <Save class="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              {/if}
            </TabsContent>

            <!-- Contact Details Tab -->
            <TabsContent value="contact-details" class="space-y-6 mt-6">
              <div class="two-column-layout">
                <!-- Contact Information -->
                <div class="column-wide">
                  <div class="card-container">
                    <div class="form-field-group">
                      <div class="form-field">
                        <Label for="primaryEmail">Primary Email</Label>
                        <div class="flex items-center gap-2">
                          <Mail class="w-4 h-4 text-muted-foreground" />
                          {#if editMode}
                            <Input id="primaryEmail" type="email" bind:value={employeeData.contactDetails.primaryEmail} class="flex-1" />
                          {:else}
                            <Input id="primaryEmail" value={employeeData.contactDetails.primaryEmail} readonly class="flex-1" />
                          {/if}
                        </div>
                      </div>

                      <div class="form-field">
                        <Label for="mobilePhone">Mobile Phone</Label>
                        <div class="flex items-center gap-2">
                          <Phone class="w-4 h-4 text-muted-foreground" />
                          {#if editMode}
                            <Input id="mobilePhone" bind:value={employeeData.contactDetails.mobilePhone} class="flex-1" />
                          {:else}
                            <Input id="mobilePhone" value={employeeData.contactDetails.mobilePhone} readonly class="flex-1" />
                          {/if}
                        </div>
                      </div>

                      <Separator class="my-6" />

                      <h3 class="font-semibold text-lg mb-4">Home Address</h3>
                      
                      <div class="form-field">
                        <Label for="homeAddress">Home Street Address</Label>
                        <div class="flex items-center gap-2">
                          <MapPin class="w-4 h-4 text-muted-foreground" />
                          {#if editMode}
                            <Input id="homeAddress" bind:value={employeeData.contactDetails.homeAddress.street} class="flex-1" />
                          {:else}
                            <Input id="homeAddress" value={employeeData.contactDetails.homeAddress.street} readonly class="flex-1" />
                          {/if}
                        </div>
                      </div>

                      <div class="form-grid-2">
                        <div class="form-field">
                          <Label for="suburb">Suburb</Label>
                          {#if editMode}
                            <Input id="suburb" bind:value={employeeData.contactDetails.homeAddress.suburb} />
                          {:else}
                            <Input id="suburb" value={employeeData.contactDetails.homeAddress.suburb} readonly />
                          {/if}
                        </div>
                        <div class="form-field">
                          <Label for="postcode">Postcode</Label>
                          {#if editMode}
                            <Input id="postcode" bind:value={employeeData.contactDetails.homeAddress.postcode} />
                          {:else}
                            <Input id="postcode" value={employeeData.contactDetails.homeAddress.postcode} readonly />
                          {/if}
                        </div>
                      </div>

                      <div class="form-grid-2">
                        <div class="form-field">
                          <Label for="state">State</Label>
                          {#if editMode}
                            <Input id="state" bind:value={employeeData.contactDetails.homeAddress.state} />
                          {:else}
                            <Input id="state" value={employeeData.contactDetails.homeAddress.state} readonly />
                          {/if}
                        </div>
                        <div class="form-field">
                          <Label for="country">Country</Label>
                          {#if editMode}
                            <Input id="country" bind:value={employeeData.contactDetails.homeAddress.country} />
                          {:else}
                            <Input id="country" value={employeeData.contactDetails.homeAddress.country} readonly />
                          {/if}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Profile Image -->
                <div class="column-sidebar">
                  <div class="card-container">
                    <Card class="card">
                      <CardHeader class="card-header">
                        <CardTitle>Profile Photo</CardTitle>
                      </CardHeader>
                      <CardContent class="card-content">
                        <div class="text-center">
                          <Avatar class="h-32 w-32 mx-auto mb-4">
                            <div class="h-full w-full bg-primary/10 flex items-center justify-center">
                              <User class="h-16 w-16 text-primary" />
                            </div>
                          </Avatar>
                          {#if editMode}
                            <Button variant="outline" class="w-full">
                              Upload Photo
                            </Button>
                          {/if}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {#if editMode}
                <div class="flex justify-end gap-3 pt-4">
                  <Button variant="outline" onclick={cancelEdit}>
                    <X class="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                  <Button onclick={saveChanges}>
                    <Save class="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              {/if}
            </TabsContent>

            <!-- Account Details Tab -->
            <TabsContent value="account-details" class="space-y-6 mt-6">
              <div class="form-field-group">
                <div class="form-field">
                  <Label for="username">Username</Label>
                  <Input id="username" value={employeeData.accountDetails.username} readonly />
                </div>

                <div class="form-grid-2">
                  <div class="form-field">
                    <Label for="lastLogin">Last Login</Label>
                    <Input id="lastLogin" value={employeeData.accountDetails.lastLogin} readonly />
                  </div>
                  <div class="form-field">
                    <Label for="accountStatus">Account Status</Label>
                    <div class="flex items-center gap-2">
                      <Input id="accountStatus" value={employeeData.accountDetails.accountStatus} readonly class="flex-1" />
                      <Badge variant="secondary" class="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        Active
                      </Badge>
                    </div>
                  </div>
                </div>

                <div class="form-field">
                  <Label>Permissions</Label>
                  <div class="flex flex-wrap gap-2 mt-2">
                    {#each employeeData.accountDetails.permissions as permission}
                      <Badge variant="outline">{permission}</Badge>
                    {/each}
                  </div>
                </div>

                <div class="form-field">
                  <Label>Two-Factor Authentication</Label>
                  <div class="flex items-center gap-3 mt-2">
                    <Badge variant={employeeData.accountDetails.twoFactorEnabled ? 'secondary' : 'outline'} 
                           class={employeeData.accountDetails.twoFactorEnabled ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : ''}>
                      {employeeData.accountDetails.twoFactorEnabled ? 'Enabled' : 'Disabled'}
                    </Badge>
                    {#if editMode}
                      <Button variant="outline" size="sm">
                        {employeeData.accountDetails.twoFactorEnabled ? 'Disable' : 'Enable'} 2FA
                      </Button>
                    {/if}
                  </div>
                </div>
              </div>

              {#if editMode}
                <div class="flex justify-end gap-3 pt-4">
                  <Button variant="outline" onclick={cancelEdit}>
                    <X class="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                  <Button onclick={saveChanges}>
                    <Save class="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              {/if}
            </TabsContent>

            <!-- Emergency Contacts Tab -->
            <TabsContent value="emergency-contacts" class="space-y-6 mt-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="font-semibold text-lg">Emergency Contacts</h3>
                {#if editMode}
                  <Button onclick={addEmergencyContact}>
                    <Plus class="w-4 h-4 mr-2" />
                    Add Contact
                  </Button>
                {/if}
              </div>

              <div class="space-y-4">
                {#each employeeData.emergencyContacts as contact (contact.id)}
                  <Card class="card">
                    <CardContent class="card-content">
                      <div class="flex items-start justify-between mb-4">
                        <div class="flex items-center gap-3">
                          <Avatar class="h-12 w-12">
                            <div class="h-full w-full bg-primary/10 flex items-center justify-center">
                              <User class="h-6 w-6 text-primary" />
                            </div>
                          </Avatar>
                          <div>
                            <h4 class="font-semibold">{contact.name || 'New Contact'}</h4>
                            <p class="text-sm text-muted-foreground">{contact.relationship}</p>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          {#if contact.isPrimary}
                            <Badge variant="default">Primary</Badge>
                          {/if}
                          {#if editMode}
                            <Button variant="outline" size="sm" onclick={() => setPrimaryContact(contact.id)}>
                              Set Primary
                            </Button>
                            <Button variant="outline" size="sm" onclick={() => deleteEmergencyContact(contact.id)} 
                                    class="text-red-600 hover:text-red-700">
                              Delete
                            </Button>
                          {/if}
                        </div>
                      </div>

                      <div class="form-grid-2">
                        <div class="form-field">
                          <Label for="contactName_{contact.id}">Name</Label>
                          {#if editMode}
                            <Input id="contactName_{contact.id}" bind:value={contact.name} />
                          {:else}
                            <Input id="contactName_{contact.id}" value={contact.name} readonly />
                          {/if}
                        </div>
                        <div class="form-field">
                          <Label for="relationship_{contact.id}">Relationship</Label>
                          {#if editMode}
                            <Input id="relationship_{contact.id}" bind:value={contact.relationship} />
                          {:else}
                            <Input id="relationship_{contact.id}" value={contact.relationship} readonly />
                          {/if}
                        </div>
                      </div>

                      <div class="form-grid-2">
                        <div class="form-field">
                          <Label for="contactPhone_{contact.id}">Phone</Label>
                          <div class="flex items-center gap-2">
                            <Phone class="w-4 h-4 text-muted-foreground" />
                            {#if editMode}
                              <Input id="contactPhone_{contact.id}" bind:value={contact.phone} class="flex-1" />
                            {:else}
                              <Input id="contactPhone_{contact.id}" value={contact.phone} readonly class="flex-1" />
                            {/if}
                          </div>
                        </div>
                        <div class="form-field">
                          <Label for="contactEmail_{contact.id}">Email</Label>
                          <div class="flex items-center gap-2">
                            <Mail class="w-4 h-4 text-muted-foreground" />
                            {#if editMode}
                              <Input id="contactEmail_{contact.id}" type="email" bind:value={contact.email} class="flex-1" />
                            {:else}
                              <Input id="contactEmail_{contact.id}" value={contact.email} readonly class="flex-1" />
                            {/if}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                {/each}
              </div>

              {#if editMode}
                <div class="flex justify-end gap-3 pt-4">
                  <Button variant="outline" onclick={cancelEdit}>
                    <X class="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                  <Button onclick={saveChanges}>
                    <Save class="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              {/if}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  </div>
</div>
