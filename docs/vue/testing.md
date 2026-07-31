---
title: Testing
---

<head>
  <title>Vue Unit and End-to-End Testing for Ionic App Components</title>
  <meta
    name="description"
    content="Vue apps created using Ionic are automatically set up for unit and end-to-end testing. Read to learn more about testing tools for Ionic components."
  />
</head>

# Testing Ionic Vue

This document provides an overview of how to test an application built with `@ionic/vue`. It covers the basics of testing with Vue, as well as the specific tools and libraries developers can use to test their applications.

## Introduction

Testing is an important part of the development process, and it helps to ensure that an application is working as intended.

## Best Practices

### Import `componentOnReady` for standalone projects

When testing Ionic components, use the exported `componentOnReady` helper from `@ionic/core` instead of calling `el.componentOnReady()` directly. The helper works with both lazy-loaded and custom-element builds, making it more likely the component has finished rendering before making assertions against its rendered DOM or running accessibility tests.
