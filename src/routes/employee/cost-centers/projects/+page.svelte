<script lang="ts">
  import { PageHeader } from '$lib/components/layout/index.js';
  import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import { Input } from '$lib/components/ui/input/index.js';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '$lib/components/ui/table/index.js';
  import { Plus, Search, Filter, MoreHorizontal, Edit, Trash2, Users, Calendar, TrendingUp } from 'lucide-svelte';

  // Mock project data
  let projects = $state([
    {
      id: '1',
      code: 'PRJ-001',
      name: 'Website Redesign',
      description: 'Complete overhaul of company website',
      department: 'Marketing',
      manager: 'Sarah Johnson',
      status: 'Active',
      startDate: '2025-01-01',
      endDate: '2025-06-30',
      budget: 125000,
      spent: 45000,
      completion: 35,
      teamSize: 8
    },
    {
      id: '2',
      code: 'PRJ-002',
      name: 'Mobile App Development',
      description: 'Native iOS and Android applications',
      department: 'Technology',
      manager: 'Michael Chen',
      status: 'Active',
      startDate: '2025-02-01',
      endDate: '2025-09-30',
      budget: 250000,
      spent: 30000,
      completion: 15,
      teamSize: 12
    },
    {
      id: '3',
      code: 'PRJ-003',
      name: 'Data Migration',
      description: 'Legacy system data migration to cloud',
      department: 'IT Operations',
      manager: 'David Williams',
      status: 'Planning',
      startDate: '2025-03-01',
      endDate: '2025-05-31',
      budget: 75000,
      spent: 0,
      completion: 0,
      teamSize: 5
    },
    {
      id: '4',
      code: 'PRJ-004',
      name: 'Marketing Campaign Q2',
      description: 'Q2 2025 marketing campaign execution',
      department: 'Marketing',
      manager: 'Emma Davis',
      status: 'Active',
      startDate: '2025-04-01',
      endDate: '2025-06-30',
      budget: 50000,
      spent: 12000,
      completion: 25,
      teamSize: 4
    },
    {
      id: '5',
      code: 'PRJ-005',
      name: 'Office Renovation',
      description: 'Perth office renovation and expansion',
      department: 'Facilities',
      manager: 'James Wilson',
      status: 'Completed',
      startDate: '2024-10-01',
      endDate: '2025-01-15',
      budget: 180000,
      spent: 175000,
      completion: 100,
      teamSize: 3
    }
  ]);

  let searchQuery = $state('');

  // Filter projects based on search
  let filteredProjects = $derived(
    projects.filter(project => 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.manager.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  function getStatusBadgeVariant(status: string) {
    switch (status) {
      case 'Active':
        return 'default';
      case 'Planning':
        return 'secondary';
      case 'Completed':
        return 'outline';
      case 'On Hold':
        return 'destructive';
      default:
        return 'outline';
    }
  }

  function getProgressColor(percentage: number) {
    if (percentage >= 75) return 'bg-green-500';
    if (percentage >= 50) return 'bg-blue-500';
    if (percentage >= 25) return 'bg-yellow-500';
    return 'bg-gray-400';
  }

  function formatCurrency(amount: number) {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }
</script>

<div class="page-container">
  <div class="page-content">
    <!-- Header -->
    <div class="page-header-with-breadcrumbs">
      <PageHeader 
        title="Projects" 
        subtitle="Manage and track organizational projects"
        breadcrumbs={[
          { label: 'Employee Hub', href: '/employee' },
          { label: 'Cost Centers', href: '/employee/cost-centers' },
          { label: 'Projects' }
        ]}
      />
      <Button>
        <Plus class="w-4 h-4 mr-2" />
        New Project
      </Button>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <Card>
        <CardContent class="p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-muted-foreground">Total Projects</p>
              <p class="text-2xl font-bold">{projects.length}</p>
            </div>
            <div class="p-3 bg-primary/10 rounded-lg">
              <TrendingUp class="w-5 h-5 text-primary" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent class="p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-muted-foreground">Active Projects</p>
              <p class="text-2xl font-bold">{projects.filter(p => p.status === 'Active').length}</p>
            </div>
            <div class="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
              <Calendar class="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent class="p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-muted-foreground">Total Budget</p>
              <p class="text-2xl font-bold">{formatCurrency(projects.reduce((sum, p) => sum + p.budget, 0))}</p>
            </div>
            <div class="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
              <TrendingUp class="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent class="p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-muted-foreground">Team Members</p>
              <p class="text-2xl font-bold">{projects.reduce((sum, p) => sum + p.teamSize, 0)}</p>
            </div>
            <div class="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
              <Users class="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    <!-- Controls Bar -->
    <div class="controls-bar">
      <div class="control-group">
        <Button variant="outline">
          <Filter class="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>
      <div class="relative w-full sm:w-64">
        <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          bind:value={searchQuery}
          placeholder="Search projects..."
          class="pl-10"
        />
      </div>
    </div>

    <!-- Projects Table -->
    <div class="card-container">
      <Card class="card-no-padding">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project Code</TableHead>
              <TableHead>Project Name</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Manager</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Budget</TableHead>
              <TableHead>Team Size</TableHead>
              <TableHead class="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {#each filteredProjects as project}
              <TableRow>
                <TableCell class="font-medium">{project.code}</TableCell>
                <TableCell>
                  <div>
                    <p class="font-medium">{project.name}</p>
                    <p class="text-xs text-muted-foreground">{project.description}</p>
                  </div>
                </TableCell>
                <TableCell>{project.department}</TableCell>
                <TableCell>{project.manager}</TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(project.status)}>
                    {project.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div class="flex items-center gap-2">
                    <div class="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        class="{getProgressColor(project.completion)} h-2 rounded-full transition-all"
                        style="width: {project.completion}%"
                      ></div>
                    </div>
                    <span class="text-sm text-muted-foreground">{project.completion}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p class="text-sm font-medium">{formatCurrency(project.spent)}</p>
                    <p class="text-xs text-muted-foreground">of {formatCurrency(project.budget)}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div class="flex items-center gap-1">
                    <Users class="w-4 h-4 text-muted-foreground" />
                    <span>{project.teamSize}</span>
                  </div>
                </TableCell>
                <TableCell class="text-right">
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal class="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            {/each}
          </TableBody>
        </Table>
      </Card>
    </div>
  </div>
</div>
