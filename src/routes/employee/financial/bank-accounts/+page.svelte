<script lang="ts">
  import { PageHeader } from '$lib/components/layout/index.js';
  import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import { Input } from '$lib/components/ui/input/index.js';
  import { Label } from '$lib/components/ui/label/index.js';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Separator } from '$lib/components/ui/separator/index.js';
  import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs/index.js';
  import { 
    AlertCircle, 
    Plus, 
    Edit, 
    Trash2, 
    Check, 
    X, 
    Building2, 
    CreditCard, 
    Wallet,
    Calendar,
    MoreHorizontal,
    ChevronRight,
    Info
  } from 'lucide-svelte';
  import { Alert, AlertDescription } from '$lib/components/ui/alert/index.js';
  import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
  } from '$lib/components/ui/breadcrumb/index.js';

  // Tab state
  let activeTab = $state('controls');

  // Mock data for banking details
  let bankingDetails = $state({
    accounts: [
      {
        id: '1',
        accountName: 'Primary Salary Account',
        accountNumber: '****1234',
        sortCode: '12-34-56',
        bankName: 'HSBC UK Bank',
        accountType: 'Current Account',
        status: 'active',
        isDefault: true,
        verified: true,
        addedDate: '2024-01-15'
      },
      {
        id: '2',
        accountName: 'Savings Account',
        accountNumber: '****5678',
        sortCode: '78-90-12',
        bankName: 'Barclays Bank',
        accountType: 'Savings Account',
        status: 'active',
        isDefault: false,
        verified: true,
        addedDate: '2024-06-20'
      },
      {
        id: '3',
        accountName: 'Emergency Fund',
        accountNumber: '****9012',
        sortCode: '34-56-78',
        bankName: 'Nationwide Building Society',
        accountType: 'Savings Account',
        status: 'pending',
        isDefault: false,
        verified: false,
        addedDate: '2025-01-10'
      }
    ],
    paymentMethods: [
      {
        id: '1',
        method: 'BACS',
        frequency: 'Monthly',
        description: 'Standard bank transfer',
        nextPaymentDate: '2025-03-25'
      }
    ],
    recentTransactions: [
      {
        id: '1',
        date: '2025-02-25',
        description: 'Monthly Salary',
        amount: 3500.00,
        type: 'credit',
        account: 'Primary Salary Account'
      },
      {
        id: '2',
        date: '2025-01-25',
        description: 'Monthly Salary',
        amount: 3500.00,
        type: 'credit',
        account: 'Primary Salary Account'
      },
      {
        id: '3',
        date: '2024-12-20',
        description: 'Year-end Bonus',
        amount: 1500.00,
        type: 'credit',
        account: 'Primary Salary Account'
      }
    ]
  });

  let showAddAccountForm = $state(false);
  let editingAccount = $state<string | null>(null);
  
  let newAccount = $state({
    accountName: '',
    accountNumber: '',
    sortCode: '',
    bankName: '',
    accountType: 'Current Account'
  });

  function toggleAddForm() {
    showAddAccountForm = !showAddAccountForm;
    if (!showAddAccountForm) {
      resetForm();
    }
  }

  function resetForm() {
    newAccount = {
      accountName: '',
      accountNumber: '',
      sortCode: '',
      bankName: '',
      accountType: 'Current Account'
    };
  }

  function addAccount() {
    const account = {
      id: Date.now().toString(),
      ...newAccount,
      status: 'pending',
      isDefault: bankingDetails.accounts.length === 0,
      verified: false,
      addedDate: new Date().toISOString().split('T')[0]
    };
    
    bankingDetails.accounts = [...bankingDetails.accounts, account];
    toggleAddForm();
  }

  function deleteAccount(id: string) {
    bankingDetails.accounts = bankingDetails.accounts.filter(acc => acc.id !== id);
  }

  function setAsDefault(id: string) {
    bankingDetails.accounts = bankingDetails.accounts.map(acc => ({
      ...acc,
      isDefault: acc.id === id
    }));
  }

  function formatSortCode(value: string) {
    // Format as XX-XX-XX
    const numbers = value.replace(/\D/g, '');
    if (numbers.length >= 6) {
      return `${numbers.slice(0, 2)}-${numbers.slice(2, 4)}-${numbers.slice(4, 6)}`;
    } else if (numbers.length >= 4) {
      return `${numbers.slice(0, 2)}-${numbers.slice(2, 4)}-${numbers.slice(4)}`;
    } else if (numbers.length >= 2) {
      return `${numbers.slice(0, 2)}-${numbers.slice(2)}`;
    }
    return numbers;
  }

  function handleSortCodeInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const formatted = formatSortCode(input.value);
    newAccount.sortCode = formatted;
    input.value = formatted;
  }
</script>

<div class="page-container">
  <div class="page-content">
    <!-- Breadcrumb Navigation -->
    <div class="mb-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/employee">Employee Hub</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/employee/financial">Financial</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Bank Accounts</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>

    <!-- Page Header -->
    <div class="page-header mb-8">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Bank Accounts</h1>
          <p class="text-muted-foreground mt-2">Manage your payment accounts and banking preferences</p>
        </div>
        <Button onclick={toggleAddForm} size="lg">
          <Plus class="w-4 h-4 mr-2" />
          Add Bank Account
        </Button>
      </div>
    </div>

    <!-- Tabs Navigation -->
    <Tabs value={activeTab} onValueChange={(value) => activeTab = value} class="space-y-6">
      <TabsList class="grid grid-cols-2 w-full max-w-md">
        <TabsTrigger value="controls">Controls Component slot</TabsTrigger>
        <TabsTrigger value="component">Component slot</TabsTrigger>
      </TabsList>

      <!-- Controls Component Tab Content -->
      <TabsContent value="controls" class="space-y-6">
        <!-- Important Notice -->
        <Alert>
          <AlertCircle class="h-4 w-4" />
          <AlertDescription>
            Banking details are encrypted and securely stored. Changes may take 1-2 business days to process and will require verification.
          </AlertDescription>
        </Alert>

        <!-- Add Account Form -->
        {#if showAddAccountForm}
          <Card>
            <CardHeader>
              <div class="flex items-center justify-between">
                <CardTitle class="text-xl">Add New Bank Account</CardTitle>
                <Button variant="ghost" size="sm" onclick={toggleAddForm}>
                  <X class="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <Label for="accountName">Account Name</Label>
                    <Input 
                      id="accountName" 
                      bind:value={newAccount.accountName}
                      placeholder="e.g. Main Salary Account"
                    />
                  </div>
                  <div class="space-y-2">
                    <Label for="bankName">Bank Name</Label>
                    <Input 
                      id="bankName" 
                      bind:value={newAccount.bankName}
                      placeholder="e.g. HSBC UK Bank"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <Label for="accountNumber">Account Number</Label>
                    <Input 
                      id="accountNumber" 
                      bind:value={newAccount.accountNumber}
                      placeholder="12345678"
                      maxlength="8"
                    />
                  </div>
                  <div class="space-y-2">
                    <Label for="sortCode">Sort Code</Label>
                    <Input 
                      id="sortCode" 
                      placeholder="12-34-56"
                      maxlength="8"
                      oninput={handleSortCodeInput}
                    />
                  </div>
                </div>

                <div class="space-y-2">
                  <Label for="accountType">Account Type</Label>
                  <select 
                    id="accountType"
                    bind:value={newAccount.accountType}
                    class="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 [&>option]:bg-card"
                  >
                    <option value="Current Account">Current Account</option>
                    <option value="Savings Account">Savings Account</option>
                    <option value="Business Account">Business Account</option>
                  </select>
                </div>

                <Separator />

                <div class="flex justify-end gap-3">
                  <Button variant="outline" onclick={toggleAddForm}>
                    Cancel
                  </Button>
                  <Button 
                    onclick={addAccount}
                    disabled={!newAccount.accountName || !newAccount.accountNumber || !newAccount.sortCode || !newAccount.bankName}
                  >
                    <Plus class="w-4 h-4 mr-2" />
                    Add Account
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        {/if}

        <!-- Bank Accounts List -->
        <Card>
          <CardHeader>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <Building2 class="h-5 w-5 text-muted-foreground" />
                <CardTitle>Your Bank Accounts</CardTitle>
              </div>
              <Badge variant="secondary" class="font-medium">
                {bankingDetails.accounts.length} {bankingDetails.accounts.length === 1 ? 'Account' : 'Accounts'}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
          {#if bankingDetails.accounts.length === 0}
            <div class="text-center py-12 text-muted-foreground">
              <AlertCircle class="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p class="text-lg font-medium mb-2">No bank accounts added</p>
              <p>Add your first bank account to receive salary payments.</p>
              <Button class="mt-4" onclick={toggleAddForm}>
                <Plus class="w-4 h-4 mr-2" />
                Add Your First Account
              </Button>
            </div>
          {:else}
            <div class="divide-y">
              {#each bankingDetails.accounts as account (account.id)}
                <div class="py-6 first:pt-0 last:pb-0">
                  <div class="flex items-start justify-between mb-4">
                    <div class="flex items-start gap-4">
                      <div class="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Building2 class="h-6 w-6 text-primary" />
                      </div>
                      <div class="space-y-1">
                        <div class="flex items-center gap-2">
                          <h3 class="font-semibold text-lg">{account.accountName}</h3>
                          {#if account.isDefault}
                            <Badge variant="default" class="h-5">
                              <Check class="w-3 h-3 mr-1" />
                              Default
                            </Badge>
                          {/if}
                        </div>
                        <p class="text-sm text-muted-foreground">{account.bankName}</p>
                        <div class="flex items-center gap-4 mt-2">
                          {#if account.verified}
                            <Badge variant="outline" class="bg-green-50 border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400">
                              <Check class="w-3 h-3 mr-1" />
                              Verified
                            </Badge>
                          {:else}
                            <Badge variant="outline" class="bg-yellow-50 border-yellow-200 text-yellow-700 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-400">
                              <AlertCircle class="w-3 h-3 mr-1" />
                              Pending Verification
                            </Badge>
                          {/if}
                          <span class="text-xs text-muted-foreground">Added {account.addedDate}</span>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      {#if !account.isDefault}
                        <Button 
                          variant="outline" 
                          size="sm"
                          onclick={() => setAsDefault(account.id)}
                        >
                          Set as Default
                        </Button>
                      {/if}
                      <Button variant="ghost" size="sm">
                        <Edit class="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onclick={() => deleteAccount(account.id)}
                      >
                        <Trash2 class="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div class="grid grid-cols-2 md:grid-cols-4 gap-6 ml-16">
                    <div>
                      <p class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Account Number</p>
                      <p class="font-mono font-medium">{account.accountNumber}</p>
                    </div>
                    <div>
                      <p class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Sort Code</p>
                      <p class="font-mono font-medium">{account.sortCode}</p>
                    </div>
                    <div>
                      <p class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Account Type</p>
                      <p class="font-medium">{account.accountType}</p>
                    </div>
                    <div>
                      <p class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Status</p>
                      <Badge 
                        variant="secondary"
                        class={account.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'}
                      >
                        {account.status === 'active' ? 'Active' : 'Pending'}
                      </Badge>
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          {/if}
          </CardContent>
        </Card>

        <!-- Payment Method & Schedule -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Payment Method Card -->
          <Card>
            <CardHeader>
              <div class="flex items-center gap-2">
                <CreditCard class="h-5 w-5 text-muted-foreground" />
                <CardTitle>Payment Method</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div class="space-y-4">
                {#each bankingDetails.paymentMethods as method (method.id)}
                  <div class="p-4 border rounded-lg bg-muted/30">
                    <div class="flex items-start justify-between">
                      <div class="space-y-1">
                        <div class="flex items-center gap-2">
                          <h3 class="font-semibold">{method.method}</h3>
                          <Badge variant="secondary" class="h-5">Active</Badge>
                        </div>
                        <p class="text-sm text-muted-foreground">{method.description}</p>
                        <p class="text-sm">
                          <span class="text-muted-foreground">Frequency:</span> 
                          <span class="font-medium">{method.frequency}</span>
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal class="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                {/each}

                <Button variant="outline" class="w-full">
                  <Plus class="w-4 h-4 mr-2" />
                  Add Payment Method
                </Button>
              </div>
            </CardContent>
          </Card>

          <!-- Payment Schedule Card -->
          <Card>
            <CardHeader>
              <div class="flex items-center gap-2">
                <Calendar class="h-5 w-5 text-muted-foreground" />
                <CardTitle>Payment Schedule</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div class="space-y-4">
                <div class="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <div class="flex items-center justify-between mb-2">
                    <p class="text-sm font-medium text-muted-foreground">Next Payment</p>
                    <Badge variant="outline" class="bg-primary/10">
                      Upcoming
                    </Badge>
                  </div>
                  <p class="text-2xl font-bold">25th March 2025</p>
                  <p class="text-sm text-muted-foreground mt-1">Monthly salary payment</p>
                </div>

                <div class="grid grid-cols-2 gap-4">
                  <div class="p-4 bg-muted/50 rounded-lg">
                    <p class="text-sm font-medium text-muted-foreground mb-1">Payment Day</p>
                    <p class="text-xl font-bold">25th</p>
                    <p class="text-xs text-muted-foreground">of each month</p>
                  </div>
                  <div class="p-4 bg-muted/50 rounded-lg">
                    <p class="text-sm font-medium text-muted-foreground mb-1">Account</p>
                    <p class="text-sm font-bold">Primary Salary</p>
                    <p class="text-xs text-muted-foreground">****1234</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 class="text-sm font-semibold mb-3">Recent Payments</h4>
                  <div class="space-y-2">
                    {#each bankingDetails.recentTransactions.slice(0, 3) as transaction}
                      <div class="flex items-center justify-between py-2">
                        <div class="flex items-center gap-3">
                          <div class="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                            <ChevronRight class="h-4 w-4 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <p class="text-sm font-medium">{transaction.description}</p>
                            <p class="text-xs text-muted-foreground">{transaction.date}</p>
                          </div>
                        </div>
                        <p class="font-semibold text-green-600 dark:text-green-400">
                          +£{transaction.amount.toFixed(2)}
                        </p>
                      </div>
                    {/each}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <!-- Important Information -->
        <Card>
          <CardHeader>
            <div class="flex items-center gap-2">
              <Info class="h-5 w-5 text-muted-foreground" />
              <CardTitle>Important Information</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="space-y-3">
                <div class="flex items-center gap-2">
                  <div class="h-8 w-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Wallet class="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 class="font-semibold">Security</h4>
                </div>
                <ul class="space-y-2 text-sm text-muted-foreground">
                  <li class="flex items-start gap-2">
                    <Check class="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Banking details encrypted with AES-256</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Only masked account numbers displayed</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Email verification required for changes</span>
                  </li>
                </ul>
              </div>
              
              <div class="space-y-3">
                <div class="flex items-center gap-2">
                  <div class="h-8 w-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                    <Calendar class="h-4 w-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h4 class="font-semibold">Processing Times</h4>
                </div>
                <ul class="space-y-2 text-sm text-muted-foreground">
                  <li class="flex items-start gap-2">
                    <span class="text-muted-foreground">•</span>
                    <span>New account verification: 1-2 business days</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-muted-foreground">•</span>
                    <span>Account changes: 1-2 business days</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-muted-foreground">•</span>
                    <span>Payment method: Up to 5 business days</span>
                  </li>
                </ul>
              </div>
              
              <div class="space-y-3">
                <div class="flex items-center gap-2">
                  <div class="h-8 w-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <Info class="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h4 class="font-semibold">Need Help?</h4>
                </div>
                <p class="text-sm text-muted-foreground">
                  Contact HR or Finance team for assistance with banking details or payment issues.
                </p>
                <Button variant="outline" size="sm" class="w-full">
                  Contact Support
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <!-- Component Slot Tab Content -->
      <TabsContent value="component" class="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Component View</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="min-h-[400px] flex items-center justify-center text-muted-foreground">
              <div class="text-center">
                <Wallet class="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p class="text-lg font-medium mb-2">Component Slot</p>
                <p class="text-sm">This tab can be used to display additional banking components or features.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
</div>
