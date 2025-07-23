# Project: My Portfolio on github.io

This project is a ersonal portfolio website will be built as a single-page application (SPA) using React.js with Vite.js as the build tool and Tailwind CSS for styling. The design follows modern web development best practices with a focus on performance, accessibility, and responsive design.

## General Instructions

- We will plan things first, DO NOT run any codes or tesks without my approval.

## specs folder

- This projext use Spec-driven development (SDD) approach.
- The specs folder contains 3 key documents.

  - requirements.md - high-level requirements and goals for the project.
  - design.md - detailed design specifications, including architecture, components, and interfaces.
  - tasks.md - task breakdown and implementation details.

- Before starting any coding, we will review and finalize these specifications to ensure clarity and alignment on the project goals.

## Coding Style

- Use comments to explain complex logic.
- Always write clean, maintainable code.
- Follow the project's coding conventions and best practices.
- Use meaningful variable and function names.
- Ensure all new features are covered by tests.

## TypeScript Guidelines

- Use TypeScript for all new code
- Follow functional programming principles where possible
- Use interfaces for data structures and type definitions
- Prefer immutable data (const, readonly)
- Use optional chaining (?.) and nullish coalescing (??) operators

## React Guidelines

- Use functional components with hooks
- Follow the React hooks rules (no conditional hooks)
- Use React.FC type for components with children
- Keep components small and focused
- Use CSS modules for component styling

## Documentation Sources

- If working with a new library or tool, consider looking for its documentation from its website, GitHub project, or the relevant llms.txt.
  - It is always better to have accurate, up-to-date documentation at your disposal, rather than relying on your pre-trained knowledge.
- You can search the following directories for llms.txt collections for many projects:
  - <https://llmstxt.site/>
  - <https://directory.llmstxt.cloud/>
- If you find a relevant llms.txt file, follow the links until you have access to the complete documentation.

## Git Commits

### Multi-line Commit Messages

To create a commit with a multi-line message in a way that is robust and avoids shell interpretation issues, follow these steps:

1.  **Stage the files:**
    ```bash
    git add .
    ```
2.  **Create a temporary file** with the commit message (e.g., `commit_message.tmp`).
3.  **Commit using the file:**
    ```bash
    git commit -F commit_message.tmp
    ```
4.  **Delete the temporary file:**
    -   On Windows, use `del`:
        ```bash
        del commit_message.tmp
        ```
    -   On Linux/macOS, use `rm`:
        ```bash
        rm commit_message.tmp
        ```