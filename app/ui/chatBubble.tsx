'use client';
import React from 'react';
import styles from './chatBubbles.module.scss';
import Button from "@cloudscape-design/components/button";
import SpaceBetween from "@cloudscape-design/components/space-between";
import TextContent from "@cloudscape-design/components/text-content";
import '@cloudscape-design/global-styles/dark-mode-utils.css';
import { motion } from 'framer-motion';

const shimmerAnimation = {
  initial: {
    scale: 1,
    opacity: 1,
  },
  animate: {
    scale: 120,
    opacity: 0,
  }
};

const shimmerTransition = {
  duration: .5,
  repeat: Infinity,
  repeatDelay: 1,
  ease: "easeIn"
};

// Define an interface for the component's props
interface ChatBubblesProps {
  variant?: 'ai' | 'human'; // Add more variants if needed
  isLoading?: boolean;
  isStreaming?: boolean;
}

const ChatBubbles: React.FC<ChatBubblesProps> = ({ variant = 'ai', isLoading = false, isStreaming = false }) => {
  const isAI = variant === 'ai';
  const isHuman = variant === 'human';


  const bubbleClass = isAI ? styles.aiBubble : styles.humanBubble;
  const avatarSrc = isAI ? "/bedrock-avatar.svg" : "/human-avatar.svg"; // Different avatars for AI and human

  // Conditional rendering of the content based on loading state
  const renderContent = () => {
    if (isAI && isLoading) {
      return (
        <div className={styles.activeAvatarContainer}>
          <div className={styles.activeAvatar}>
            <img className={[styles.activeAvatarImg, "awsui-util-show-in-dark-mode"].join(" ")} width={32} src='/bedrock-avatar_active_dark.svg' alt={isAI ? "AI avatar" : "Human avatar"} />
            <img className={[styles.activeAvatarImg, "awsui-util-hide-in-dark-mode"].join(" ")} width={32} src='/bedrock-avatar_active_light.svg' alt={isAI ? "AI avatar" : "Human avatar"} />
          </div>
          <motion.div
            className={[styles.shimmerEffectDark, "awsui-util-show-in-dark-mode"].join(" ")}
            initial="initial"
            animate="animate"
            variants={shimmerAnimation}
            transition={shimmerTransition}
          />
          <motion.div
            className={[styles.shimmerEffect, "awsui-util-hide-in-dark-mode"].join(" ")}
            initial="initial"
            animate="animate"
            variants={shimmerAnimation}
            transition={shimmerTransition}
          />
        </div>
      )
    } 
    else if (isAI && isStreaming) {
      return (
        <div className={styles.activeAvatarContainer}>
          <div className={styles.activeAvatar}>
            <img className={[styles.activeAvatarImg, "awsui-util-show-in-dark-mode"].join(" ")} width={32} src='/bedrock-avatar_active_dark.svg' alt={isAI ? "AI avatar" : "Human avatar"} />
            <img className={[styles.activeAvatarImg, "awsui-util-hide-in-dark-mode"].join(" ")} width={32} src='/bedrock-avatar_active_light.svg' alt={isAI ? "AI avatar" : "Human avatar"} />
          </div>
        </div>
      )
    } else {
      return (
        <>
          <img className={styles.avatarImg} src={avatarSrc} width={32} alt={isAI ? "AI avatar" : "Human avatar"} />
          <SpaceBetween direction='vertical' size="l">
            <TextContent>
              <p>This is the text content area for the chat bubbles. Render the response from the AI here and any additional components.</p>
            </TextContent>
            {isAI && (
              <>
                <SpaceBetween direction="horizontal" size="xxs">
                  <Button iconName="thumbs-up" variant="icon" />
                  <Button iconName="thumbs-down" variant="icon" />
                  <div className={styles.divider}></div>
                  <Button iconName="copy" variant="icon" />
                </SpaceBetween>
              </>
            )}

            {isHuman && (
              <>
                <SpaceBetween direction="horizontal" size="xxs">
                  <Button iconName="edit" variant="icon" />
                </SpaceBetween>
              </>
            )}

          </SpaceBetween>
        </>
      );
    }
  };

  return (
    <div className={`${styles.chatBubble} ${bubbleClass}`}>
      <div className={styles.chatContentContainer}>
        {renderContent()}
      </div>
    </div>
  );
};

ChatBubbles.displayName = "ChatBubbles";

export default ChatBubbles;
