import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import PageHeader from '$lib/components/layout/PageHeader.svelte';

describe('PageHeader', () => {
	it('renders title correctly', () => {
		render(PageHeader, { props: { title: 'Test Title' } });
		expect(screen.getByText('Test Title:')).toBeInTheDocument();
	});

	it('renders subtitle correctly', () => {
		render(PageHeader, { props: { title: 'Test', subtitle: 'Subtitle' } });
		expect(screen.getByText('Subtitle')).toBeInTheDocument();
	});

	it('renders custom breadcrumbs', () => {
		const breadcrumbs = [
			{ label: 'Home', href: '/home' },
			{ label: 'Page', href: '/page' }
		];
		
		render(PageHeader, { 
			props: { 
				title: 'Test',
				breadcrumbs 
			} 
		});
		
		expect(screen.getByText('Home')).toBeInTheDocument();
		expect(screen.getByText('Page')).toBeInTheDocument();
	});

	it('hides breadcrumbs when showBreadcrumbs is false', () => {
		render(PageHeader, { 
			props: { 
				title: 'Test',
				showBreadcrumbs: false 
			} 
		});
		
		// Should not render any breadcrumb elements
		const breadcrumbContainer = document.querySelector('[data-slot="breadcrumb"]');
		expect(breadcrumbContainer).not.toBeInTheDocument();
	});

	it('applies correct styling classes', () => {
		render(PageHeader, { props: { title: 'Test' } });
		
		// Check title styling
		const titleElement = screen.getByText('Test:');
		expect(titleElement).toHaveClass('font-extralight', 'text-[#43484e]');
		
		// Check breadcrumb styling
		const breadcrumb = document.querySelector('[data-slot="breadcrumb"]');
		expect(breadcrumb).toHaveClass('text-[12px]', 'text-[#1e2227]', 'tracking-[0.24px]');
	});
});
