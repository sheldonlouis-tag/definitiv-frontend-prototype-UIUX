<script lang="ts">
  import { PageHeader } from '$lib/components/layout/index.js';
  import { Card } from '$lib/components/ui/card/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import { Input } from '$lib/components/ui/input/index.js';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select/index.js';
  import EyeIcon from '@lucide/svelte/icons/eye';
  import SettingsIcon from '@lucide/svelte/icons/settings';
  import PlusIcon from '@lucide/svelte/icons/plus';
  
  // Sample onboarding data - in real app this would come from an API
  interface OnboardingRecord {
    id: string;
    firstName: string;
    lastName: string;
    dateSent: string;
    dateCompleted: string | null;
    onboardingStatus: 'in-progress' | 'complete' | 'not-started';
    approvalStatus: 'approved' | 'not-approved' | 'pending';
  }

  let searchQuery = $state('');
  let statusFilter = $state('active');

  const onboardingData: OnboardingRecord[] = [
    {
      id: '1',
      firstName: 'Kevin',
      lastName: 'Frazer',
      dateSent: '03 April 2024',
      dateCompleted: null,
      onboardingStatus: 'in-progress',
      approvalStatus: 'not-approved'
    },
    {
      id: '2',
      firstName: 'Natalie',
      lastName: 'Howard',
      dateSent: '03 April 2024',
      dateCompleted: '03 April 2024',
      onboardingStatus: 'complete',
      approvalStatus: 'not-approved'
    }
  ];

  // Filter data based on search and status
  const filteredData = $derived(
    onboardingData.filter(record => {
      const matchesSearch = searchQuery === '' || 
        `${record.firstName} ${record.lastName}`.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || 
        (statusFilter === 'active' && record.onboardingStatus !== 'complete');
      
      return matchesSearch && matchesStatus;
    })
  );

  const getStatusVariant = (status: string): 'default' | 'secondary' | 'destructive' | 'outline' => {
    switch (status) {
      case 'in-progress': return 'default';
      case 'complete': return 'secondary';
      case 'not-started': return 'outline';
      default: return 'default';
    }
  };

  const getStatusLabel = (status: string): string => {
    switch (status) {
      case 'in-progress': return 'In Progress';
      case 'complete': return 'Complete';
      case 'not-started': return 'Not Started';
      default: return status;
    }
  };

  const getApprovalVariant = (status: string): 'default' | 'secondary' | 'destructive' | 'outline' => {
    switch (status) {
      case 'approved': return 'secondary';
      case 'not-approved': return 'destructive';
      case 'pending': return 'outline';
      default: return 'default';
    }
  };

  const getApprovalLabel = (status: string): string => {
    switch (status) {
      case 'approved': return 'Approved';
      case 'not-approved': return 'Not Approved';
      case 'pending': return 'Pending';
      default: return status;
    }
  };

  const handleViewOnboarding = (id: string) => {
    // Navigate to onboarding detail page
    console.log('View onboarding:', id);
  };

  const handleSettings = () => {
    // Navigate to onboarding settings
    console.log('Open settings');
  };

  const handleStartNewOnboarding = () => {
    // Navigate to new onboarding flow
    console.log('Start new onboarding');
  };
</script>

<div class="page-container">
  <div class="page-content">
    <!-- Header Section -->
    <div class="page-header">
      <PageHeader 
        title="Onboarding" 
        breadcrumbs={[
          { label: 'App', href: '/app' },
          { label: 'My Team', href: '/my-team' },
          { label: 'Onboarding' }
        ]}
      />
      <div class="flex gap-3">
        <Button variant="outline" onclick={handleSettings}>
          <SettingsIcon class="w-4 h-4 mr-2" />
          Settings
        </Button>
        <Button onclick={handleStartNewOnboarding}>
          <PlusIcon class="w-4 h-4 mr-2" />
          Start New Onboarding
        </Button>
      </div>
    </div>

    <!-- Controls Bar -->
    <div class="controls-bar">
      <div class="control-group">
        <div class="relative w-full sm:w-80">
          <Input
            bind:value={searchQuery}
            placeholder="Search by Name"
            class="pl-4"
          />
        </div>
        <div class="relative w-full sm:w-60">
          <Select type="single" bind:value={statusFilter}>
            <SelectTrigger>
              {statusFilter === 'active' ? 'Active Onboardings' : statusFilter === 'complete' ? 'Completed' : 'All Statuses'}
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active Onboardings</SelectItem>
              <SelectItem value="complete">Completed</SelectItem>
              <SelectItem value="all">All Statuses</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="card-container">
      <Card class="card-no-padding">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="border-b border-border/40 bg-muted/20">
              <tr>
                <th class="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground">
                  First Name
                </th>
                <th class="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground">
                  Last Name
                </th>
                <th class="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground">
                  Date Sent
                </th>
                <th class="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground">
                  Date Completed
                </th>
                <th class="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground">
                  Onboarding Status
                </th>
                <th class="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground">
                  Approval Status
                </th>
                <th class="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-card divide-y divide-border/40">
              {#each filteredData as record (record.id)}
                <tr class="hover:bg-muted/10 transition-colors">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                    {record.firstName}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                    {record.lastName}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                    {record.dateSent}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                    {record.dateCompleted || 'Not Completed Yet'}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <Badge variant={getStatusVariant(record.onboardingStatus)}>
                      {getStatusLabel(record.onboardingStatus)}
                    </Badge>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <Badge variant={getApprovalVariant(record.approvalStatus)}>
                      {getApprovalLabel(record.approvalStatus)}
                    </Badge>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onclick={() => handleViewOnboarding(record.id)}
                    >
                      <EyeIcon class="w-4 h-4 mr-1" />
                      View
                    </Button>
                  </td>
                </tr>
              {/each}
              {#if filteredData.length === 0}
                <tr>
                  <td colspan="7" class="px-6 py-12 text-center text-sm text-muted-foreground">
                    {searchQuery ? `No onboarding records found matching "${searchQuery}"` : 'No onboarding records found'}
                  </td>
                </tr>
              {/if}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  </div>
</div>

<style>
  /* Additional custom styles if needed */
  th {
    user-select: none;
  }
  
  th:hover {
    background-color: hsl(var(--muted) / 0.3);
  }
</style>