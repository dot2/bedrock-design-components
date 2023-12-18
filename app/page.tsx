'use client';
import Image from 'next/image'
import styles from './page.module.scss'
import "@cloudscape-design/global-styles/index.css"
import ChatBubbles from './ui/chatBubble'
import Container from "@cloudscape-design/components/container";
import SpaceBetween from "@cloudscape-design/components/space-between";
import React from 'react';



// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <h1>Bedrock design components</h1>
//       <Container>
//         <SpaceBetween direction='vertical' size='l'>
//           <ChatBubbles variant="ai" />
//           <ChatBubbles variant="human" />
//           <ChatBubbles variant="ai" isLoading />
//         </SpaceBetween>
//       </Container>
//     </main>
//   )
// }

import {
  AppLayout,
  BreadcrumbGroup,
  ContentLayout,
  Flashbar,
  Header,
  HelpPanel,
  Link,
  SideNavigation,
  Textarea,
  SplitPanel,
  Button,
} from '@cloudscape-design/components';
import { I18nProvider } from '@cloudscape-design/components/i18n';
import messages from '@cloudscape-design/components/i18n/messages/all.en';

const LOCALE = 'en';

export default function () {
  const [value, setValue] = React.useState("");
  return (
    <I18nProvider locale={LOCALE} messages={[messages]}>
      <AppLayout
        breadcrumbs={
          <BreadcrumbGroup
            items={[
              { text: 'Amazon Bedrock', href: '#' },
              { text: 'Chat playground', href: '#' },
            ]}
          />
        }
        navigationOpen={false}
        navigation={
          <SideNavigation
            header={{
              href: '#',
              text: 'Service name',
            }}
            items={[{ type: 'link', text: `Paage #1`, href: `#` }]}
          />
        }
        toolsOpen={false}
        tools={<HelpPanel header={<h2>Overview</h2>}>Help content</HelpPanel>}
        content={
          <ContentLayout
            header={
              <Header variant="h1" info={<Link variant="info">Info</Link>}>
                Chat playground
              </Header>
            }
          >
            <Container
              className={styles.chatContainer}
            // header={
            //   <Header variant="h2" description="Container description">
            //     Container header
            //   </Header>

            // }
            >
              <SpaceBetween direction='vertical' size="l">
                <SpaceBetween direction='vertical' size='l'>
                  <ChatBubbles variant="human" />
                  <ChatBubbles variant="ai" />
                  <ChatBubbles variant="human" />
                  <ChatBubbles variant="ai" isLoading />
                </SpaceBetween>
                <Textarea
                  onChange={({ detail }) => setValue(detail.value)}
                  value={value}
                  placeholder="This is a placeholder"
                />
                <Button variant="primary">Button</Button>
              </SpaceBetween>
            </Container>
          </ContentLayout>
        }
      />
    </I18nProvider>
  );
}
