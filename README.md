# Coursework Evaluation Platform

This project is a web application built with Next.js 14, TailwindCSS, Zustand, and Shadcn UI. The platform allows users to upload and evaluate coursework, view details, and manage uploaded files using browser local storage.

## Tech Stack

- **Next.js 14**: A React framework for server-rendered or statically-exported React apps.
- **TailwindCSS**: A utility-first CSS framework for building custom designs.
- **Zustand**: A small, fast, and scalable state management solution.
- **Shadcn UI**: A component library for consistent and reusable UI elements.

## Key Features

### 1. File Upload
- **Drag-and-Drop Functionality**: Implemented for PDF files.
- **Manual Upload Option**: Users can also upload files via a manual selection dialog.
- **File Size Limit**: Displays a limit of 25 MB per file.
- **Local Storage**: Stores uploaded files in the browser’s local storage.

### 2. Local Storage Implementation
- **Persistence**: Saves uploaded files and their metadata to local storage.
- **Efficient Retrieval**: Retrieves stored files and data efficiently across page reloads.

### 3. Coursework Details Form
- **Dropdowns**: Includes dropdowns for "Coursework Type" and "Subject".
- **Text Input**: Provides a text input field for the essay title.
- **Local Storage**: Stores form data locally with the associated file.

### 4. Evaluation Display
- **Dummy Data**: Uses dummy data for all evaluations.
- **Circular Progress Indicator**: Shows overall score with a circular progress indicator.
- **Score Breakdown**: Displays breakdown of scores by criteria (A, B, C).
- **Evaluation Date**: Includes the date of the evaluation.
- **Local Storage**: Stores and retrieves evaluation results locally.

### 5. Coursework List
- **Display**: Shows previously uploaded coursework from local storage.
- **Details**: Includes title, subject, word count, and other relevant details.

### 6. Explore Coursework Section
- **Tabbed Interface**: Implements tabs for different coursework categories.
- **Grid Layout**: Displays coursework examples in a grid layout.

## Bonus Features

- **Animations**: Smooth transitions between states and micro-interactions for enhanced user feedback.
- **User Gratification**: Congratulatory messages for good scores and encouraging feedback for areas of improvement.
- **Accessibility**: Includes proper use of ARIA attributes and keyboard navigation support.
- **Playwright Tests**: Playwright is used for end-to-end testing of the application. 

## Implementation Notes

- **Local Storage**: All data is stored and retrieved from local storage, with considerations for storage limitations.
- **Design Consistency**: Closely matches the provided Figma designs.
- **State Management**: Zustand is used for global state management.
- **UI Components**: Shadcn UI components are utilized for maintaining design consistency.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone git@github.com:Srutip04/zu-ai.git
   ```
2. **Install Dependencies**:
   ```bash
   cd zu-ai
   npm install
   ```
3. **Run development server**:
   ```bash
         npm run dev 
    ```
## Assumptions and Design Decisions
- Local Storage: Assumed that users would primarily interact with the application in a single session. Implemented persistent local storage for file management and form data.
- Dummy Data: Used dummy data for evaluation purposes to simplify initial implementation and testing.
  
## Implemented Features and Bonus Points
- Core Features: File upload, local storage implementation, coursework details form, evaluation display, coursework list, explore coursework section.
- Bonus Features: Animations, user gratification, accessibility enhancements.
  
## Challenges Faced and Solutions
- Local Storage Limitations: Addressed potential storage limitations by providing user feedback when storage limits are reached and implementing data compression.
- Design Matching: Ensured designs closely match provided Figma files through careful implementation of UI components and styles.

## Testing
### Playwright Tests
Playwright is used for end-to-end testing of the application. To run Playwright tests, follow these steps:

### Install Playwright:

```bash
npx playwright install
```

### Run Playwright Tests:
```bash
npm run test:e2e
```
This command runs all the end-to-end tests defined in the playwright test suite.
