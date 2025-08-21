<script lang="ts">
  import { PageHeader } from '$lib/components/layout/index.js';
  import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import { Input } from '$lib/components/ui/input/index.js';
  import { Label } from '$lib/components/ui/label/index.js';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Separator } from '$lib/components/ui/separator/index.js';
  import { AlertCircle, Plus, Edit, Trash2, Check, X } from 'lucide-svelte';
  import { Alert, AlertDescription } from '$lib/components/ui/alert/index.js';

  // Mock data for banking details
  let bankingDetails = $state({
    accounts: [
      {
        id: '1',
        accountName: 'Primary Salary Account',
        accountNumber: '****1234',
        sortCode: '12-34-56',
        bankName: 'Example Bank PLC',
        accountType: 'Current Account',
        status: 'active',
        isDefault: true,
        verified: true
      },
      {
        id: '2',
        accountName: 'Savings Account',
        accountNumber: '****5678',
        sortCode: '78-90-12',
        bankName: 'Another Bank Ltd',
        accountType: 'Savings Account',
        status: 'active',
        isDefault: false,
        verified: false
      }
    ],
    paymentMethods: [
      {
        id: '1',
        method: 'BACS',
        frequency: 'Monthly',
        description: 'Standard bank transfer'
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
      verified: false
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
    <!-- Header -->
    <div class="page-header-with-breadcrumbs">
      <PageHeader 
        title="Banking Details" 
        subtitle="Manage your payment accounts and preferences"
        breadcrumbs={[
          { label: 'Employee Hub', href: '/employee' },
          { label: 'Finance', href: '/employee/finance' },
          { label: 'Banking' }
        ]}
      />
      <Button onclick={toggleAddForm}>
        <Plus class="w-4 h-4 mr-2" />
        Add Account
      </Button>
    </div>

    <!-- Important Notice -->
    <Alert class="mb-6">
      <AlertCircle class="h-4 w-4" />
      <AlertDescription>
        Banking details are encrypted and securely stored. Changes may take 1-2 business days to process and will require verification.
      </AlertDescription>
    </Alert>

    <!-- Add Account Form -->
    {#if showAddAccountForm}
      <div class="card-container">
        <Card class="card">
          <CardHeader class="card-header">
            <CardTitle>Add New Bank Account</CardTitle>
          </CardHeader>
          <CardContent class="card-content">
            <div class="form-field-group">
              <div class="form-grid-2">
                <div class="form-field">
                  <Label for="accountName">Account Name</Label>
                  <Input 
                    id="accountName" 
                    bind:value={newAccount.accountName}
                    placeholder="e.g. Main Salary Account"
                  />
                </div>
                <div class="form-field">
                  <Label for="bankName">Bank Name</Label>
                  <Input 
                    id="bankName" 
                    bind:value={newAccount.bankName}
                    placeholder="e.g. Example Bank PLC"
                  />
                </div>
              </div>

              <div class="form-grid-2">
                <div class="form-field">
                  <Label for="accountNumber">Account Number</Label>
                  <Input 
                    id="accountNumber" 
                    bind:value={newAccount.accountNumber}
                    placeholder="12345678"
                    maxlength="8"
                  />
                </div>
                <div class="form-field">
                  <Label for="sortCode">Sort Code</Label>
                  <Input 
                    id="sortCode" 
                    placeholder="12-34-56"
                    maxlength="8"
                    oninput={handleSortCodeInput}
                  />
                </div>
              </div>

              <div class="form-field">
                <Label for="accountType">Account Type</Label>
                <select 
                  id="accountType"
                  bind:value={newAccount.accountType}
                  class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 [&>option]:bg-card"
                >
                  <option value="Current Account">Current Account</option>
                  <option value="Savings Account">Savings Account</option>
                  <option value="Business Account">Business Account</option>
                </select>
              </div>
            </div>

            <div class="flex justify-end gap-3 pt-4">
              <Button variant="outline" onclick={toggleAddForm}>
                Cancel
              </Button>
              <Button 
                onclick={addAccount}
                disabled={!newAccount.accountName || !newAccount.accountNumber || !newAccount.sortCode || !newAccount.bankName}
              >
                Add Account
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    {/if}

    <!-- Bank Accounts -->
    <div class="card-container">
      <Card class="card">
        <CardHeader class="card-header">
          <CardTitle>Bank Accounts</CardTitle>
        </CardHeader>
        <CardContent class="card-content">
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
            <div class="space-y-4">
              {#each bankingDetails.accounts as account (account.id)}
                <div class="border rounded-lg p-4">
                  <div class="flex items-start justify-between mb-3">
                    <div class="flex items-center gap-3">
                      <div>
                        <h3 class="font-semibold text-lg">{account.accountName}</h3>
                        <p class="text-sm text-muted-foreground">{account.bankName}</p>
                      </div>
                      <div class="flex gap-2">
                        {#if account.isDefault}
                          <Badge variant="default">Default</Badge>
                        {/if}
                        {#if account.verified}
                          <Badge variant="secondary" class="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            <Check class="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        {:else}
                          <Badge variant="secondary" class="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                            Pending Verification
                          </Badge>
                        {/if}
                      </div>
                    </div>
                    <div class="flex gap-2">
                      {#if !account.isDefault}
                        <Button 
                          variant="outline" 
                          size="sm"
                          onclick={() => setAsDefault(account.id)}
                        >
                          Set as Default
                        </Button>
                      {/if}
                      <Button variant="outline" size="sm">
                        <Edit class="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onclick={() => deleteAccount(account.id)}
                        class="text-red-600 hover:text-red-700"
                      >
                        <Trash2 class="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p class="text-muted-foreground mb-1">Account Number</p>
                      <p class="font-mono">{account.accountNumber}</p>
                    </div>
                    <div>
                      <p class="text-muted-foreground mb-1">Sort Code</p>
                      <p class="font-mono">{account.sortCode}</p>
                    </div>
                    <div>
                      <p class="text-muted-foreground mb-1">Account Type</p>
                      <p>{account.accountType}</p>
                    </div>
                    <div>
                      <p class="text-muted-foreground mb-1">Status</p>
                      <Badge 
                        variant={account.status === 'active' ? 'secondary' : 'outline'}
                        class={account.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : ''}
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
    </div>

    <!-- Payment Method Settings -->
    <div class="card-container">
      <Card class="card">
        <CardHeader class="card-header">
          <CardTitle>Payment Method</CardTitle>
        </CardHeader>
        <CardContent class="card-content">
          <div class="space-y-4">
            {#each bankingDetails.paymentMethods as method (method.id)}
              <div class="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 class="font-medium">{method.method}</h3>
                  <p class="text-sm text-muted-foreground">{method.description}</p>
                </div>
                <div class="text-right">
                  <p class="text-sm font-medium">{method.frequency}</p>
                  <Badge variant="secondary">Current Method</Badge>
                </div>
              </div>
            {/each}
          </div>

          <Separator class="my-6" />

          <div class="space-y-4">
            <h4 class="font-medium">Payment Schedule</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-muted rounded-lg">
                <p class="font-medium mb-2">Next Payment</p>
                <p class="text-2xl font-bold">25th March 2025</p>
                <p class="text-muted-foreground">Monthly salary payment</p>
              </div>
              <div class="p-4 bg-muted rounded-lg">
                <p class="font-medium mb-2">Payment Day</p>
                <p class="text-2xl font-bold">25th</p>
                <p class="text-muted-foreground">of each month</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    <!-- Important Information -->
    <div class="card-container">
      <Card class="card">
        <CardHeader class="card-header">
          <CardTitle>Important Information</CardTitle>
        </CardHeader>
        <CardContent class="card-content">
          <div class="space-y-4 text-sm">
            <div>
              <h4 class="font-medium mb-2">Security</h4>
              <ul class="space-y-1 text-muted-foreground list-disc list-inside">
                <li>All banking details are encrypted and stored securely</li>
                <li>We never store your full account number - only masked versions are displayed</li>
                <li>Changes require email verification before processing</li>
              </ul>
            </div>
            
            <Separator />
            
            <div>
              <h4 class="font-medium mb-2">Processing Times</h4>
              <ul class="space-y-1 text-muted-foreground list-disc list-inside">
                <li>New account verification: 1-2 business days</li>
                <li>Account changes: 1-2 business days</li>
                <li>Payment method changes: Up to 5 business days</li>
              </ul>
            </div>
            
            <Separator />
            
            <div>
              <h4 class="font-medium mb-2">Need Help?</h4>
              <p class="text-muted-foreground">
                Contact HR or Finance team if you experience any issues with your banking details or payments.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</div>
