'use client';
import Image from 'next/image'
import styles from './page.module.scss'
import "@cloudscape-design/global-styles/index.css"
import ChatBubbles from './ui/chatBubble'
import Container from "@cloudscape-design/components/container";
import SpaceBetween from "@cloudscape-design/components/space-between";
import React from 'react';
import { applyMode, Mode } from '@cloudscape-design/global-styles'

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

const Page = () => {
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
                  <ChatBubbles variant="ai" isStreaming />
                </SpaceBetween>
                <Textarea
                  onChange={({ detail }) => setValue(detail.value)}
                  value={value}
                  placeholder="Enter your instructions"
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

applyMode(Mode.Light);

export default Page;


