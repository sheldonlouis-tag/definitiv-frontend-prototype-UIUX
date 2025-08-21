<script lang="ts">
  import { PageHeader } from '$lib/components/layout/index.js';
  import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import { Input } from '$lib/components/ui/input/index.js';
  import { Label } from '$lib/components/ui/label/index.js';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Separator } from '$lib/components/ui/separator/index.js';
  import { Avatar } from '$lib/components/ui/avatar/index.js';
  import { Edit, Phone, Mail, MapPin, Calendar, Building, User } from 'lucide-svelte';

  // Mock employee data
  let employeeData = $state({
    personal: {
      firstName: 'John',
      lastName: 'Smith',
      preferredName: 'John',
      dateOfBirth: '1990-05-15',
      email: 'john.smith@company.com',
      phone: '+61 400 123 456',
      mobile: '+61 400 123 456',
      address: {
        street: '123 Collins Street',
        suburb: 'Melbourne',
        state: 'VIC',
        postcode: '3000',
        country: 'Australia'
      }
    },
    employment: {
      employeeId: 'EMP001',
      position: 'Senior Software Developer',
      department: 'Engineering',
      manager: 'Sarah Johnson',
      startDate: '2022-03-15',
      employmentType: 'Full-time',
      workLocation: 'Melbourne Office',
      status: 'Active'
    },
    emergency: {
      contactName: 'Jane Smith',
      relationship: 'Spouse',
      phone: '+61 400 987 654',
      email: 'jane.smith@email.com'
    }
  });

  let editMode = $state(false);

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
</script>

<div class="page-container">
  <div class="page-content">
    <!-- Header -->
    <div class="page-header-with-breadcrumbs">
      <PageHeader 
        title="Employee Details" 
        subtitle="View and manage your personal information"
        breadcrumbs={[
          { label: 'Employee Hub', href: '/employee' },
          { label: 'Details' }
        ]}
      />
      <Button onclick={toggleEditMode}>
        <Edit class="w-4 h-4 mr-2" />
        {editMode ? 'Cancel' : 'Edit Details'}
      </Button>
    </div>

    <!-- Employee Profile Overview -->
    <div class="card-container">
      <Card class="card">
        <CardContent class="card-content">
          <div class="flex items-start gap-6">
            <Avatar class="h-20 w-20">
              <div class="h-full w-full bg-primary/10 flex items-center justify-center">
                <User class="h-8 w-8 text-primary" />
              </div>
            </Avatar>
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <h1 class="text-2xl font-bold">{employeeData.personal.firstName} {employeeData.personal.lastName}</h1>
                <Badge variant="secondary" class="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  {employeeData.employment.status}
                </Badge>
              </div>
              <p class="text-lg text-muted-foreground mb-2">{employeeData.employment.position}</p>
              <div class="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div class="flex items-center gap-1">
                  <Building class="w-4 h-4" />
                  {employeeData.employment.department}
                </div>
                <div class="flex items-center gap-1">
                  <Calendar class="w-4 h-4" />
                  Started {new Date(employeeData.employment.startDate).toLocaleDateString('en-AU')}
                </div>
                <div class="flex items-center gap-1">
                  <User class="w-4 h-4" />
                  ID: {employeeData.employment.employeeId}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    <!-- Two Column Layout -->
    <div class="two-column-layout">
      <!-- Main Column -->
      <div class="column-wide">
        <div class="card-container">
          <!-- Personal Information -->
          <Card class="card">
            <CardHeader class="card-header">
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent class="card-content">
              <div class="form-field-group">
                <div class="form-grid-2">
                  <div class="form-field">
                    <Label for="firstName">First Name</Label>
                    {#if editMode}
                      <Input id="firstName" bind:value={employeeData.personal.firstName} />
                    {:else}
                      <Input id="firstName" value={employeeData.personal.firstName} readonly />
                    {/if}
                  </div>
                  <div class="form-field">
                    <Label for="lastName">Last Name</Label>
                    {#if editMode}
                      <Input id="lastName" bind:value={employeeData.personal.lastName} />
                    {:else}
                      <Input id="lastName" value={employeeData.personal.lastName} readonly />
                    {/if}
                  </div>
                </div>

                <div class="form-grid-2">
                  <div class="form-field">
                    <Label for="preferredName">Preferred Name</Label>
                    {#if editMode}
                      <Input id="preferredName" bind:value={employeeData.personal.preferredName} />
                    {:else}
                      <Input id="preferredName" value={employeeData.personal.preferredName} readonly />
                    {/if}
                  </div>
                  <div class="form-field">
                    <Label for="dateOfBirth">Date of Birth</Label>
                    {#if editMode}
                      <Input id="dateOfBirth" type="date" bind:value={employeeData.personal.dateOfBirth} />
                    {:else}
                      <Input id="dateOfBirth" value={new Date(employeeData.personal.dateOfBirth).toLocaleDateString('en-AU')} readonly />
                    {/if}
                  </div>
                </div>
              </div>

              {#if editMode}
                <div class="flex justify-end gap-3 pt-4">
                  <Button variant="outline" onclick={cancelEdit}>
                    Cancel
                  </Button>
                  <Button onclick={saveChanges}>
                    Save Changes
                  </Button>
                </div>
              {/if}
            </CardContent>
          </Card>

          <!-- Contact Information -->
          <Card class="card">
            <CardHeader class="card-header">
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent class="card-content">
              <div class="form-field-group">
                <div class="form-field">
                  <Label for="email">Email Address</Label>
                  <div class="flex items-center gap-2">
                    <Mail class="w-4 h-4 text-muted-foreground" />
                    {#if editMode}
                      <Input id="email" type="email" bind:value={employeeData.personal.email} class="flex-1" />
                    {:else}
                      <Input id="email" value={employeeData.personal.email} readonly class="flex-1" />
                    {/if}
                  </div>
                </div>

                <div class="form-grid-2">
                  <div class="form-field">
                    <Label for="phone">Phone</Label>
                    <div class="flex items-center gap-2">
                      <Phone class="w-4 h-4 text-muted-foreground" />
                      {#if editMode}
                        <Input id="phone" bind:value={employeeData.personal.phone} class="flex-1" />
                      {:else}
                        <Input id="phone" value={employeeData.personal.phone} readonly class="flex-1" />
                      {/if}
                    </div>
                  </div>
                  <div class="form-field">
                    <Label for="mobile">Mobile</Label>
                    <div class="flex items-center gap-2">
                      <Phone class="w-4 h-4 text-muted-foreground" />
                      {#if editMode}
                        <Input id="mobile" bind:value={employeeData.personal.mobile} class="flex-1" />
                      {:else}
                        <Input id="mobile" value={employeeData.personal.mobile} readonly class="flex-1" />
                      {/if}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <!-- Address Information -->
          <Card class="card">
            <CardHeader class="card-header">
              <CardTitle>Address Information</CardTitle>
            </CardHeader>
            <CardContent class="card-content">
              <div class="form-field-group">
                <div class="form-field">
                  <Label for="street">Street Address</Label>
                  <div class="flex items-center gap-2">
                    <MapPin class="w-4 h-4 text-muted-foreground" />
                    {#if editMode}
                      <Input id="street" bind:value={employeeData.personal.address.street} class="flex-1" />
                    {:else}
                      <Input id="street" value={employeeData.personal.address.street} readonly class="flex-1" />
                    {/if}
                  </div>
                </div>

                <div class="form-grid-2">
                  <div class="form-field">
                    <Label for="suburb">Suburb</Label>
                    {#if editMode}
                      <Input id="suburb" bind:value={employeeData.personal.address.suburb} />
                    {:else}
                      <Input id="suburb" value={employeeData.personal.address.suburb} readonly />
                    {/if}
                  </div>
                  <div class="form-field">
                    <Label for="state">State</Label>
                    {#if editMode}
                      <select 
                        id="state"
                        bind:value={employeeData.personal.address.state}
                        class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 [&>option]:bg-card"
                      >
                        <option value="VIC">Victoria</option>
                        <option value="NSW">New South Wales</option>
                        <option value="QLD">Queensland</option>
                        <option value="WA">Western Australia</option>
                        <option value="SA">South Australia</option>
                        <option value="TAS">Tasmania</option>
                        <option value="ACT">Australian Capital Territory</option>
                        <option value="NT">Northern Territory</option>
                      </select>
                    {:else}
                      <Input id="state" value={employeeData.personal.address.state} readonly />
                    {/if}
                  </div>
                </div>

                <div class="form-grid-2">
                  <div class="form-field">
                    <Label for="postcode">Postcode</Label>
                    {#if editMode}
                      <Input id="postcode" bind:value={employeeData.personal.address.postcode} />
                    {:else}
                      <Input id="postcode" value={employeeData.personal.address.postcode} readonly />
                    {/if}
                  </div>
                  <div class="form-field">
                    <Label for="country">Country</Label>
                    {#if editMode}
                      <Input id="country" bind:value={employeeData.personal.address.country} />
                    {:else}
                      <Input id="country" value={employeeData.personal.address.country} readonly />
                    {/if}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <!-- Sidebar Column -->
      <div class="column-sidebar">
        <div class="card-container">
          <!-- Employment Information -->
          <Card class="card">
            <CardHeader class="card-header">
              <CardTitle>Employment Details</CardTitle>
            </CardHeader>
            <CardContent class="card-content">
              <div class="space-y-4 text-sm">
                <div class="flex justify-between">
                  <span class="text-muted-foreground">Employee ID</span>
                  <span class="font-mono">{employeeData.employment.employeeId}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-muted-foreground">Position</span>
                  <span>{employeeData.employment.position}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-muted-foreground">Department</span>
                  <span>{employeeData.employment.department}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-muted-foreground">Manager</span>
                  <span>{employeeData.employment.manager}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-muted-foreground">Start Date</span>
                  <span>{new Date(employeeData.employment.startDate).toLocaleDateString('en-AU')}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-muted-foreground">Employment Type</span>
                  <span>{employeeData.employment.employmentType}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-muted-foreground">Work Location</span>
                  <span>{employeeData.employment.workLocation}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <!-- Emergency Contact -->
          <Card class="card">
            <CardHeader class="card-header">
              <CardTitle>Emergency Contact</CardTitle>
            </CardHeader>
            <CardContent class="card-content">
              <div class="space-y-4 text-sm">
                <div>
                  <p class="font-medium">{employeeData.emergency.contactName}</p>
                  <p class="text-muted-foreground">{employeeData.emergency.relationship}</p>
                </div>
                <Separator />
                <div class="flex items-center gap-2">
                  <Phone class="w-4 h-4 text-muted-foreground" />
                  <span>{employeeData.emergency.phone}</span>
                </div>
                <div class="flex items-center gap-2">
                  <Mail class="w-4 h-4 text-muted-foreground" />
                  <span>{employeeData.emergency.email}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <!-- Quick Actions -->
          <Card class="card">
            <CardHeader class="card-header">
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent class="card-content">
              <div class="space-y-3">
                <Button variant="outline" class="w-full justify-start">
                  <Calendar class="w-4 h-4 mr-2" />
                  Request Leave
                </Button>
                <Button variant="outline" class="w-full justify-start">
                  <Building class="w-4 h-4 mr-2" />
                  Change Department
                </Button>
                <Button variant="outline" class="w-full justify-start">
                  <User class="w-4 h-4 mr-2" />
                  Update Profile Photo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

    <!-- Additional Information Section -->
    <div class="card-container">
      <Card class="card">
        <CardHeader class="card-header">
          <CardTitle>Additional Information</CardTitle>
        </CardHeader>
        <CardContent class="card-content">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div class="p-4 bg-muted rounded-lg">
              <p class="font-medium mb-2">Years of Service</p>
              <p class="text-2xl font-bold text-primary">
                {Math.floor((new Date().getTime() - new Date(employeeData.employment.startDate).getTime()) / (1000 * 60 * 60 * 24 * 365.25))}
              </p>
              <p class="text-muted-foreground">Years</p>
            </div>
            <div class="p-4 bg-muted rounded-lg">
              <p class="font-medium mb-2">Leave Balance</p>
              <p class="text-2xl font-bold text-primary">24</p>
              <p class="text-muted-foreground">Days remaining</p>
            </div>
            <div class="p-4 bg-muted rounded-lg">
              <p class="font-medium mb-2">Next Review</p>
              <p class="text-2xl font-bold text-primary">Mar</p>
              <p class="text-muted-foreground">2025</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</div>
