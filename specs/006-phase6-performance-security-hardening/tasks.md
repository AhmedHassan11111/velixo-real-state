# Tasks — Phase 6: Performance & Security Hardening

**Feature**: `006-phase6-performance-security-hardening`
**Status**: In progress

---

## Completed Tasks

- [x] **T1**: Re-enable Next image optimization with AVIF/WebP output formats and explicit responsive size buckets.
- [x] **T2**: Keep `priority` only for the hero image; remove eager priority from below-the-fold imagery.
- [x] **T3**: Add production security headers in `next.config.ts`: CSP, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy`.
- [x] **T4**: Disable `X-Powered-By` and keep compression enabled.
- [x] **T5**: Move remaining section copy used by Gallery, Highlight, and Features intro into `content.ts`.
- [x] **T6**: Remove placeholder social links and the malformed feature copy fragment.

## Remaining Verification

- [ ] **T7**: Run Lighthouse once the app is served in a production-like environment.
- [x] **T8**: Verify local page responds with the configured security headers.
- [ ] **T9**: Verify optimized image responses in the browser network panel.
- [ ] **T10**: Review CSP in deployment logs for any blocked production resource.
