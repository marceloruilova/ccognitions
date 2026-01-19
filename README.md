# Code Cognitions Studio

This is the official website for the Code Cognitions Studio.

## Getting Started

Follow these instructions to set up the project for local development.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20.x or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd ccognitions
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```
4.  Create a local environment file by copying the example:
    ```bash
    copy .env.example .env.local
    ```
5.  Fill in the required environment variables in `.env.local`. See the "Environment Variables" section for more details.

6.  Run the development server:
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

In the project directory, you can run:

-   `npm run dev`: Runs the app in development mode.
-   `npm run build`: Builds the app for production.
-   `npm run start`: Starts a production server.
-   `npm run lint`: Runs the ESLint code linter.
-   `npm run test`: Runs the Jest test suite.
-   `npm run test:watch`: Runs Jest in interactive watch mode.

## Environment Variables

This project uses environment variables to manage configuration. You must create a `.env.local` file in the root of the project (by copying `.env.example`) and provide values for the following variables:

-   `RESEND_API_KEY`: Your API key for Resend to handle contact form submissions.
-   `BUSINESS_EMAIL`: The email address where contact form messages will be sent.
-   `SENTRY_ORG`: Your Sentry organization slug (for build-time source map uploads).
-   `SENTRY_PROJECT`: Your Sentry project name (for build-time source map uploads).
-   `NEXT_PUBLIC_SENTRY_DSN`: Your public Sentry DSN for capturing client-side errors.

## Testing

This project uses [Jest](https://jestjs.io/) for unit and integration testing. You can run the test suite with:

```bash
npm run test
```

## Deployment

To deploy this application, you can use a platform like [Vercel](https://vercel.com/) or any other Node.js hosting provider.

The general steps are:

1.  Push your code to a Git repository.
2.  Configure your hosting provider to connect to the repository.
3.  Ensure the environment variables listed above are set in the hosting provider's settings.
4.  The provider will typically run the `npm run build` command and deploy the output.

## CI/CD

A Continuous Integration (CI) pipeline is configured using GitHub Actions (`.github/workflows/ci.yml`). This pipeline automatically runs on every push and pull request to the `main` branch to ensure that the linter, tests, and production build pass successfully.