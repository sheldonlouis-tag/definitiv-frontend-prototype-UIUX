<script lang="ts">
  import { PageHeader } from '$lib/components/layout/index.js';
  import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import { CreditCard, Receipt, Gift, ArrowRight } from 'lucide-svelte';
  import { goto } from '$app/navigation';

  const financeOptions = [
    {
      title: 'Banking Details',
      description: 'Manage your bank accounts and payment preferences',
      icon: CreditCard,
      href: '/employee/finance/banking',
      available: true
    },
    {
      title: 'Payslips',
      description: 'View and download your salary payslips',
      icon: Receipt,
      href: '/employee/finance/payslips',
      available: false
    },
    {
      title: 'Benefits',
      description: 'Manage your employee benefits and perks',
      icon: Gift,
      href: '/employee/finance/benefits',
      available: false
    }
  ];

  function navigateTo(href: string, available: boolean) {
    if (available) {
      goto(href);
    }
  }
</script>

<div class="page-container">
  <div class="page-content">
    <div class="page-header-with-breadcrumbs">
      <PageHeader 
        title="Finance" 
        subtitle="Manage your financial information and preferences"
        breadcrumbs={[
          { label: 'Employee Hub', href: '/employee' },
          { label: 'Finance' }
        ]}
      />
    </div>

    <div class="card-container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each financeOptions as option}
          <Card 
            class="card cursor-pointer hover:shadow-md transition-shadow {option.available ? '' : 'opacity-60'}"
            onclick={() => navigateTo(option.href, option.available)}
          >
            <CardHeader class="card-header">
              <div class="flex items-center gap-3">
                <div class="p-2 bg-primary/10 rounded-lg">
                  <svelte:component this={option.icon} class="w-6 h-6 text-primary" />
                </div>
                <CardTitle class="text-lg">{option.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent class="card-content">
              <p class="text-muted-foreground mb-4">{option.description}</p>
              <div class="flex items-center justify-between">
                {#if option.available}
                  <Button variant="outline" size="sm" class="w-full">
                    View Details
                    <ArrowRight class="w-4 h-4 ml-2" />
                  </Button>
                {:else}
                  <Button variant="outline" size="sm" class="w-full" disabled>
                    Coming Soon
                  </Button>
                {/if}
              </div>
            </CardContent>
          </Card>
        {/each}
      </div>
    </div>

    <!-- Quick Stats -->
    <div class="card-container">
      <Card class="card">
        <CardHeader class="card-header">
          <CardTitle>Financial Overview</CardTitle>
        </CardHeader>
        <CardContent class="card-content">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center p-4 bg-muted rounded-lg">
              <p class="text-2xl font-bold text-primary">1</p>
              <p class="text-sm text-muted-foreground">Active Bank Account</p>
            </div>
            <div class="text-center p-4 bg-muted rounded-lg">
              <p class="text-2xl font-bold text-primary">£3,500</p>
              <p class="text-sm text-muted-foreground">Last Payment</p>
            </div>
            <div class="text-center p-4 bg-muted rounded-lg">
              <p class="text-2xl font-bold text-primary">25th</p>
              <p class="text-sm text-muted-foreground">Next Payment Date</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</div>
