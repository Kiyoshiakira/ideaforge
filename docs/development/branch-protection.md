# Branch Protection Setup Guide

This guide explains how to set up branch protection rules for the IdeaForge repository to ensure all CI checks pass before merging.

## Prerequisites

- Repository admin/maintainer access
- CI workflow (`.github/workflows/ci.yml`) must be set up and running

## Steps to Configure Branch Protection

### 1. Navigate to Branch Settings

1. Go to your repository on GitHub: `https://github.com/Kiyoshiakira/ideaforge`
2. Click **Settings** (top navigation bar)
3. In the left sidebar, click **Branches**
4. Under "Branch protection rules", click **Add rule**

### 2. Configure Protection Rule

#### Basic Settings

**Branch name pattern:** `main`

#### Protection Options

Enable the following options:

✅ **Require a pull request before merging**

- Require approvals: 1 (recommended)
- Dismiss stale pull request approvals when new commits are pushed (recommended)
- Require review from Code Owners (optional)

✅ **Require status checks to pass before merging**

- Require branches to be up to date before merging ✓
- Select the following status checks:
  - `Lint and Test (18.x)`
  - `Lint and Test (20.x)`
  - `CI Status Check`

✅ **Require conversation resolution before merging** (recommended)

✅ **Require linear history** (recommended)

- Prevents merge commits, enforces rebase or squash merging

✅ **Do not allow bypassing the above settings**

- Ensures even admins must follow the rules

#### Optional Settings (Recommended)

- ✅ Require deployments to succeed before merging
  - Select: `github-pages` (if using GitHub Pages)
- ✅ Lock branch
  - Makes the branch read-only (only for emergency use)

### 3. Save Changes

Click **Create** or **Save changes** at the bottom of the page.

## What This Protects Against

With these rules enabled:

🛡️ **Code Quality**

- No code can be merged without passing ESLint checks
- All HTML must pass validation
- Code formatting is checked (warnings only)

🛡️ **Build Safety**

- Build must succeed before merge
- Tests must pass (when implemented)

🛡️ **Review Process**

- At least one approval required
- All conversations must be resolved

🛡️ **History Integrity**

- Linear commit history (no merge commits)
- Protected from force pushes

## Testing the Protection

After enabling branch protection:

1. Create a new branch:

   ```bash
   git checkout -b test-branch-protection
   ```

2. Make a change that would fail CI:

   ```javascript
   // Add invalid JavaScript to public/main.js
   const x = // syntax error
   ```

3. Commit and push:

   ```bash
   git add .
   git commit -m "Test branch protection"
   git push origin test-branch-protection
   ```

4. Create a pull request to `main`

5. Observe:
   - CI runs automatically
   - CI fails due to syntax error
   - **Merge button is disabled** with message: "Merging is blocked - Required status checks must pass"

6. Fix the error and push again:

   ```bash
   git add .
   git commit -m "Fix syntax error"
   git push
   ```

7. Observe:
   - CI runs again
   - CI passes
   - **Merge button is enabled**

## Troubleshooting

### Status Checks Not Showing

**Problem:** Required status checks aren't listed in the dropdown

**Solution:**

1. The workflow must run at least once for checks to appear
2. Push a commit to trigger the workflow
3. Wait for workflow to complete
4. Return to branch protection settings
5. The status checks should now be selectable

### "Required status checks" Section Missing

**Problem:** Can't find the required status checks option

**Solution:**

1. Ensure the repository has GitHub Actions enabled (Settings → Actions → General)
2. Verify the CI workflow file exists at `.github/workflows/ci.yml`
3. Confirm at least one workflow run has completed

### Bypass Protection Rules

**Problem:** Need to merge without passing CI (emergency only)

**Solution (Admin only):**

1. Settings → Branches → Edit rule for `main`
2. Temporarily uncheck "Do not allow bypassing the above settings"
3. Admin can now merge with override
4. **Re-enable immediately after emergency merge**

### Update Status Check Names

**Problem:** Renamed jobs in CI workflow, status checks don't match

**Solution:**

1. Wait for workflow to run with new job names
2. Edit branch protection rule
3. Remove old status checks
4. Add new status checks
5. Save changes

## Recommended Workflow

With branch protection enabled, follow this workflow:

```bash
# 1. Create feature branch
git checkout -b feature/new-feature

# 2. Make changes
# ... edit files ...

# 3. Run tests locally
npm test

# 4. Commit and push
git add .
git commit -m "Add new feature"
git push origin feature/new-feature

# 5. Create PR on GitHub
# 6. Wait for CI to pass
# 7. Request review
# 8. Address review comments
# 9. Merge when approved and CI passes
```

## Advanced: Require Signed Commits

For additional security, require signed commits:

1. In branch protection rule, enable:
   ✅ **Require signed commits**

2. Team members must set up GPG signing:

   ```bash
   # Generate GPG key
   gpg --full-generate-key

   # List keys
   gpg --list-secret-keys --keyid-format=long

   # Configure Git
   git config --global user.signingkey YOUR_KEY_ID
   git config --global commit.gpgsign true
   ```

3. Add GPG key to GitHub:
   - Settings → SSH and GPG keys → New GPG key
   - Paste public key

## Status Badge

Display branch protection status in README:

```markdown
[![Branch Protection](https://img.shields.io/badge/branch-protected-success.svg)](https://github.com/Kiyoshiakira/ideaforge/settings/branches)
```

## Support

For issues with branch protection:

1. Check [GitHub's branch protection documentation](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
2. Review workflow logs in Actions tab
3. Contact repository administrators

---

**Last Updated:** 2025-01-10  
**Maintained By:** IdeaForge Development Team
