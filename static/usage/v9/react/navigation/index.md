import Playground from '@site/src/components/global/Playground';

import react_main_tsx from './react/main_tsx.md';
import react_dashboard_page_tsx from './react/dashboard_page_tsx.md';
import react_item_detail_page_tsx from './react/item_detail_page_tsx.md';
import react_settings_page_tsx from './react/settings_page_tsx.md';

<Playground
  version="9"
  src="usage/v9/react/navigation/demo.html"
  code={{
    react: {
      files: {
        'src/main.tsx': react_main_tsx,
        'src/pages/DashboardPage.tsx': react_dashboard_page_tsx,
        'src/pages/ItemDetailPage.tsx': react_item_detail_page_tsx,
        'src/pages/SettingsPage.tsx': react_settings_page_tsx,
      },
    },
  }}
  size="xlarge"
  includeIonContent={false}
/>
