# Personal Resume Website

A dynamic, modern resume website built with React and TypeScript to showcase skills, experience, and education in an interactive format.

## Table of Contents

* [Purpose](#purpose)
* [Features](#features)
* [Technologies](#technologies)
* [Setup](#setup)
* [Customization](#customization)

## Purpose

An interactive online resume for potential employers and collaborators, utilizing modern web technologies to demonstrate development expertise.

## Features

*   **modern UI:** Responsive, dark-themed design using Tailwind CSS.
*   **Dynamic Content:** All data is driven by a structured TypeScript data file.
*   **Interactive Terminal:** A hidden "easter egg" terminal with tab completion and verified commands (try `cat education.db`).
*   **Projects Showcase:** Specialized display for DevOps and Software Engineering projects.
*   **Experience Timeline:** Collapsible "Earlier Experience" section to keep the view focused.
*   **Contact Form:** Integrated working contact form.
*   **Accessibility:** Dark mode optimizations (Dark Reader compatible).

## Technologies

*   **React 18**: Component-based UI architecture.
*   **TypeScript**: Type-safety and structured data.
*   **Vite**: Fast build tool and development server.
*   **Tailwind CSS**: Utility-first styling for rapid UI development.
*   **Lucide React**: Modern, lightweight icon set.

## Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **View the site:**
    Open `http://localhost:5173` in your browser.

## Customization

*   **Update Content:** Edit `src/data.ts`. This file acts as the single source of truth for your profile, experience, skills, and projects. You do not need to touch the HTML or React components to update your text.
*   **Modify Styles:** The project uses Tailwind CSS. You can adjust classes directly in `src/App.tsx` or update global rules in `src/index.css`.
*   **Contact Form:** Update the `action` URL in `src/App.tsx` to points to your own FormSubmit endpoint.
