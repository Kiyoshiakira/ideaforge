# CI/CD Pipeline Documentation

## Overview

IdeaForge uses GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD) to ensure code quality and automate deployments.

## Workflows

### 1. CI - Continuous Integration (`.github/workflows/ci.yml`)

This workflow runs on every pull request and push to the `main` branch to ensure code quality.

**Triggers:**
- Pull requests to `main`
- Pushes to `main`

**Jobs:**

#### Lint and Test
- **Matrix Strategy:** Tests on Node.js versions 18.x and 20.x
- **Steps:**
  1. Checkout code
  2. Setup Node.js with npm caching
  3. Install dependencies (`npm ci`)
  4. Run ESLint for JavaScript linting
  5. Run HTML validation
  6. Check code formatting with Prettier
  7. Run build step

#### Status Check
- Aggregates results from all lint and test jobs
- Provides a single status check for branch protection rules

**Execution Time:** ~2-3 minutes (thanks to dependency caching)

### 2. Firebase Hosting Deployment

Two workflows handle Firebase deployment:

#### Deploy to Firebase Hosting on PR (`.github/workflows/firebase-hosting-pull-request.yml`)
- Creates preview deployments for pull requests
- Provides preview URLs in PR comments

#### Deploy to Firebase Hosting on merge (`.github/workflows/firebase-hosting-merge.yml`)
- Deploys to production when changes are merged to `main`

## Code Quality Tools

### ESLint
JavaScript/HTML linter that enforces code quality standards.

**Configuration:** `eslint.config.js`

**Run locally:**
```bash
npm run lint:js
```

**Key Rules:**
- Recommended ESLint rules
- HTML script support via `eslint-plugin-html`
- Warnings for unused variables
- Custom globals for Firebase and app functions

### Prettier
Code formatter for consistent styling across JavaScript, HTML, CSS, and Markdown files.

**Configuration:** `.prettierrc.json`

**Run locally:**
```bash
# Check formatting
npm run format:check

# Auto-format files
npm run format
```

**Settings:**
- Semicolons required
- Single quotes
- 2-space indentation
- 100 character line width (120 for HTML)

### HTML Validate
Validates HTML files for accessibility and semantic correctness.

**Configuration:** `.htmlvalidate.json`

**Run locally:**
```bash
npm run lint:html
```

**Rules:**
- HTML5 standards compliance
- Accessibility warnings (ARIA, lang attributes)
- Semantic HTML recommendations

## Development Workflow

### Before Committing

1. **Run linters:**
   ```bash
   npm run lint
   ```

2. **Format code:**
   ```bash
   npm run format
   ```

3. **Run all checks:**
   ```bash
   npm test
   ```

### Creating a Pull Request

1. Push your branch to GitHub
2. Open a pull request to `main`
3. GitHub Actions will automatically:
   - Run linting on Node 18.x and 20.x
   - Validate HTML
   - Check code formatting
   - Run the build
   - Create a Firebase preview deployment

4. Review the CI status checks - all must pass before merging
5. Address any linting or formatting issues

### After Merge

1. Changes are automatically deployed to production via Firebase
2. CI runs again on the `main` branch to ensure integrity

## Branch Protection Rules

To enable branch protection (requires admin access):

1. Go to repository **Settings** → **Branches**
2. Add rule for `main` branch:
   - ✅ Require status checks to pass before merging
   - Select required checks:
     - `Lint and Test (18.x)`
     - `Lint and Test (20.x)`
     - `CI Status Check`
   - ✅ Require branches to be up to date before merging
   - ✅ Require linear history (recommended)
   - ✅ Do not allow bypassing the above settings

## Performance Optimizations

### Dependency Caching
- Node modules are cached using `actions/setup-node@v4`
- Cache key is based on `package-lock.json`
- Reduces workflow time by ~1-2 minutes

### Matrix Strategy
- Tests on multiple Node.js versions (18.x, 20.x)
- Runs in parallel for faster feedback
- Ensures compatibility across environments

### Fast Builds
- Static site with no build step (echo only)
- HTML validation uses minimal resources
- ESLint and Prettier run efficiently

## Troubleshooting

### CI Failing on Linting

**Problem:** ESLint or HTML validation errors

**Solution:**
```bash
# Run linters locally
npm run lint

# Auto-fix ESLint issues
npx eslint --fix 'public/**/*.js'

# Review HTML validation errors
npm run lint:html
```

### CI Failing on Formatting

**Problem:** Code not formatted per Prettier rules

**Solution:**
```bash
# Auto-format all files
npm run format

# Check what will change
npm run format:check
```

### Workflow Not Triggering

**Problem:** Push/PR doesn't trigger CI

**Solution:**
- Ensure workflow file is in `.github/workflows/`
- Check workflow syntax is valid YAML
- Verify branch names match triggers
- Check repository Actions are enabled (Settings → Actions)

### Dependency Installation Fails

**Problem:** `npm ci` fails in workflow

**Solution:**
- Ensure `package-lock.json` is committed
- Run `npm install` locally and commit lockfile
- Check for platform-specific dependencies

## Extending the CI Pipeline

### Adding Tests

When unit/integration tests are added:

1. Add test script to `package.json`:
   ```json
   "scripts": {
     "test:unit": "jest",
     "test": "npm run lint && npm run test:unit"
   }
   ```

2. Update CI workflow:
   ```yaml
   - name: Run tests
     run: npm test
   ```

### Adding Security Scanning

To add dependency vulnerability scanning:

1. Add Dependabot (`.github/dependabot.yml`):
   ```yaml
   version: 2
   updates:
     - package-ecosystem: "npm"
       directory: "/"
       schedule:
         interval: "weekly"
   ```

2. Add CodeQL analysis workflow from GitHub marketplace

### Adding Performance Tests

For lighthouse/performance testing:

```yaml
- name: Run Lighthouse CI
  uses: treosh/lighthouse-ci-action@v10
  with:
    urls: |
      http://localhost:8080
    uploadArtifacts: true
```

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Node.js CI/CD Guide](https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs)
- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Prettier Documentation](https://prettier.io/docs/en/)
- [HTML Validate Documentation](https://html-validate.org/)
- [GitHub Actions Marketplace](https://github.com/marketplace?type=actions)

## Status Badges

The CI status badge is displayed in the README:

```markdown
![CI](https://github.com/Kiyoshiakira/ideaforge/workflows/CI%20-%20Continuous%20Integration/badge.svg)
```

## Support

For CI/CD issues:
1. Check workflow run logs in GitHub Actions tab
2. Review this documentation
3. Open an issue with the `ci-cd` label
4. Contact maintainers via discussions

---

**Last Updated:** 2025-01-10  
**Maintained By:** IdeaForge Development Team
