import Playground from '@site/src/components/global/Playground';

import angular_app_routes_ts from './angular/app_routes_ts.md';
import angular_app_component_html from './angular/app_component_html.md';
import angular_app_component_ts from './angular/app_component_ts.md';
import angular_example_component_html from './angular/example_component_html.md';
import angular_example_component_ts from './angular/example_component_ts.md';
import angular_dashboard_page_component_html from './angular/dashboard_page_component_html.md';
import angular_dashboard_page_component_ts from './angular/dashboard_page_component_ts.md';
import angular_item_detail_page_component_html from './angular/item_detail_page_component_html.md';
import angular_item_detail_page_component_ts from './angular/item_detail_page_component_ts.md';
import angular_settings_page_component_html from './angular/settings_page_component_html.md';
import angular_settings_page_component_ts from './angular/settings_page_component_ts.md';

import react_main_tsx from './react/main_tsx.md';
import react_dashboard_page_tsx from './react/dashboard_page_tsx.md';
import react_item_detail_page_tsx from './react/item_detail_page_tsx.md';
import react_settings_page_tsx from './react/settings_page_tsx.md';

export default function NavigationPlayground({ defaultFramework = 'angular' }) {
  return (
    <Playground
      version="9"
      src="usage/v9/navigation/demo.html"
      code={{
        angular: {
          files: {
            'src/app/app.routes.ts': angular_app_routes_ts,
            'src/app/app.component.html': angular_app_component_html,
            'src/app/app.component.ts': angular_app_component_ts,
            'src/app/example.component.html': angular_example_component_html,
            'src/app/example.component.ts': angular_example_component_ts,
            'src/app/dashboard/dashboard-page.component.html': angular_dashboard_page_component_html,
            'src/app/dashboard/dashboard-page.component.ts': angular_dashboard_page_component_ts,
            'src/app/item-detail/item-detail-page.component.html': angular_item_detail_page_component_html,
            'src/app/item-detail/item-detail-page.component.ts': angular_item_detail_page_component_ts,
            'src/app/settings/settings-page.component.html': angular_settings_page_component_html,
            'src/app/settings/settings-page.component.ts': angular_settings_page_component_ts,
          },
        },
        react: {
          files: {
            'src/main.tsx': react_main_tsx,
            'src/pages/DashboardPage.tsx': react_dashboard_page_tsx,
            'src/pages/ItemDetailPage.tsx': react_item_detail_page_tsx,
            'src/pages/SettingsPage.tsx': react_settings_page_tsx,
          },
        },
      }}
      includeIonContent={false}
      devicePreview
      defaultFramework={defaultFramework}
    />
  );
}
