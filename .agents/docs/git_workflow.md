## Git Workflow

**CRITICAL**: The `master` branch is protected. Always work on feature branches:

```sh
git checkout -b feature/your-feature-name
# Make changes, commit
git push -u origin feature/your-feature-name
```

### Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `refactor:` - Code refactoring
- `style:` - Formatting
- `test:` - Tests
- `chore:` - Maintenance

### Pull Requests

Create PRs with assignment and labels:

```sh
gh pr create --title "Title" --body "Description" --assignee @me --label <bug|documentation|enhancement|maintenance>
```
