@CLAUDE.md

<!-- BEGIN BEADS INTEGRATION v:1 profile:minimal hash:7510c1e2 -->
## Beads Issue Tracker

This project uses **bd (beads)** for issue tracking. Run `bd prime` to see full workflow context and commands.

### Quick Reference

```bash
bd ready              # Find available work
bd show <id>          # View issue details
bd update <id> --claim  # Claim work
bd close <id>         # Complete work
```

### Rules

- Use `bd` for ALL task tracking — do NOT use TodoWrite, TaskCreate, or markdown TODO lists
- Run `bd prime` for detailed command reference and session close protocol
- Use `bd remember` for persistent knowledge — do NOT use MEMORY.md files

**Architecture in one line:** issues live in a local Dolt DB; sync uses `refs/dolt/data` on your git remote; `.beads/issues.jsonl` is a passive export. See https://github.com/gastownhall/beads/blob/main/docs/SYNC_CONCEPTS.md for details and anti-patterns.

## Session Completion

Before the last message of a session:

1. File a bead for anything left over, and close the finished ones.
2. Run the quality gates if code changed: `npm run lint` and `npm run build`.
3. Commit, and once the work is finished and verified, push, `master` included: Vercel redeploys the live site on every push to `master`, and that needs no asking.
4. Hand off: what changed, what was verified, what the next session picks up.
<!-- END BEADS INTEGRATION -->
