# Configuration Directory

This directory contains application configuration files, including UI component configurations and application settings.

## Files

### `sidebar-configs.ts`
Contains predefined sidebar configurations for different user roles and application sections:

- **`employeeHubSidebarConfig`** - Standard employee interface
- **`adminSidebarConfig`** - Administrative interface with additional controls
- **`managerSidebarConfig`** - Team management focused interface

## Usage

```typescript
import { employeeHubSidebarConfig } from '$lib/config/sidebar-configs';
// or
import { employeeHubSidebarConfig } from '$lib/config';

<CustomSidebar config={employeeHubSidebarConfig}>
  <!-- content -->
</CustomSidebar>
```

## Role-Based Configuration

Different sidebar configurations can be used based on user roles:

```typescript
import { employeeHubSidebarConfig, adminSidebarConfig, managerSidebarConfig } from '$lib/config';

// Determine config based on user role
const getSidebarConfig = (userRole: string) => {
  switch (userRole) {
    case 'admin': return adminSidebarConfig;
    case 'manager': return managerSidebarConfig;
    default: return employeeHubSidebarConfig;
  }
};
```

## Adding New Configurations

To add new sidebar configurations:

1. Define the configuration using the `SidebarConfig` interface
2. Export it from `sidebar-configs.ts`
3. Re-export from `index.ts` if needed
4. Update this README with the new configuration details
