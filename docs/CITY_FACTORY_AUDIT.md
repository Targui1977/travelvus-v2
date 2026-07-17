# City Factory Audit

**Phase 108.2 — Part A**
**Date: 2026-07-17**

---

## Manual Steps Required Per City (Before Factory)

| Step | Classification | Effort | Automated? |
|------|---------------|--------|-----------|
| Register CityId in cities.ts | Configuration | 2 min | ✅ Registry |
| Add airport metadata | Dataset | 5 min | ✅ Template |
| Create destination dataset file | Dataset | 30-60 min | ⚠️ Data entry |
| Define transfer profiles per airport | Dataset | 60-90 min | ⚠️ Research |
| Set default destination | Configuration | 1 min | ✅ Registry |
| Define canonical scenario | Configuration | 5 min | ✅ Template |
| Update isSupportedComparison | Engine | 0 min | ✅ Auto via registry |
| Update Quick Compare INITIAL data | UI | 5 min | ✅ getInitialForCity() |
| Verify verdict uses correct names | Validation | 2 min | ✅ Auto via buildCityOption |
| Verify evidence uses city labels | Validation | 2 min | ✅ Auto via context |
| Add browser tests | Testing | 30 min | ⚠️ Template available |
| Create documentation | Documentation | 20 min | ✅ Template available |
| Run validator | Validation | 1 min | ✅ validateCity() |
| Run full test suite | Testing | 2 min | ✅ npm test |
| Deploy | Operations | 3 min | ✅ npx vercel |

**Before factory: ~3-5 hours per city.**
**After factory: ~1-2 hours per city (primarily data entry + research).**

---

## Classification Summary

| Classification | Count | Automated |
|---------------|-------|-----------|
| Engine | 0 | N/A — zero engine changes needed |
| Dataset | 2 | Template + contract enforced |
| Configuration | 3 | Registry-driven |
| Documentation | 1 | Template generated |
| Testing | 2 | Template + validator |
| UI | 1 | Dynamic from registry |
| URL | 0 | Automatic via city= param |
| Validator | 1 | validateCity() |
| Operations | 1 | Standard deploy |

**Conclusion: After Phase 108.2, adding a city is a data-entry exercise.**
