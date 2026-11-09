# 2026 controller submissions

Latest PR per GitHub author, created November 9, 2026 (Europe/Madrid).
Controller files copied from the pinned PR heads, with the integration repairs listed below. Tomas remains the baseline example.

| PR | GitHub author | Controller | Revision |
| --- | --- | --- | --- |
| [#40](https://github.com/tomisu/FlappyBird/pull/40) | xtret55 | src/Controllers/JoseLuis.js | 12536ee0e73c73d3514d7f5e888f3ddef13a7263 |
| [#41](https://github.com/tomisu/FlappyBird/pull/41) | 02Tcardenas | src/Controllers/Tristan.js | 752b11289084abcb8ea304649accf97a2c21e088 |
| [#43](https://github.com/tomisu/FlappyBird/pull/43) | ahechu | src/Controllers/Ahechu.js | 983e7f74b8171a8e415838a6951c7546ee1729f8 |
| [#44](https://github.com/tomisu/FlappyBird/pull/44) | capitanpancreas-glitch | src/Controllers/iker.js | bcbaa73901fc57a120877ca6b078fdb2dc254d8e |
| [#45](https://github.com/tomisu/FlappyBird/pull/45) | P0oncho | src/Controllers/angel.js | 975ef5228626e99388700df8bd64ac7a32cd5fca |
| [#46](https://github.com/tomisu/FlappyBird/pull/46) | AinhoaSM | src/Controllers/Ainhoa.js | e6bca795d1ad0e0e0b8f8d2517a6906d40b8533c |
| [#47](https://github.com/tomisu/FlappyBird/pull/47) | nat13373 | src/Controllers/Natalia.js | aafdc14c3fa57f2b2bfaf4444074c4695a6888df |
| [#48](https://github.com/tomisu/FlappyBird/pull/48) | anasouboulka-beep | src/Controllers/anas.js | 9e4047556a89b08d11655bd4ab2db0c47ec37224 |
| [#50](https://github.com/tomisu/FlappyBird/pull/50) | iancizug | src/Controllers/Ancizu.js | 0038e773f474c9cf5043bc41cd0c7f782fdf562d |
| [#51](https://github.com/tomisu/FlappyBird/pull/51) | edurneapellaniz | src/Controllers/Edurne.js | 9ab6495f7bd5ea6c1f386a83a405a3dc7d9ce244 |
| [#52](https://github.com/tomisu/FlappyBird/pull/52) | juneiriarte | src/Controllers/June.js | f60e90d10dcdabf30d4498c90736a9a2844af32f |
| [#53](https://github.com/tomisu/FlappyBird/pull/53) | fentom31 | src/Controllers/Adrian.js | 797d8b144c027285731db3132ca706138dd53e19 |
| [#54](https://github.com/tomisu/FlappyBird/pull/54) | inigoyaniz | src/Controllers/InigoYaniz.js | 47e8861c2df68581e2db48aca08d29dc8ce6a552 |
| [#56](https://github.com/tomisu/FlappyBird/pull/56) | inigoAZ | src/Controllers/InigoA.js | 17c50128d08af1fab3980002222b6b237e743d1a |
| [#57](https://github.com/tomisu/FlappyBird/pull/57) | javvierlarra | src/Controllers/JavierLarramendi.js | 00679304f5af5ca07faf39adacc7fe10f71af76a |
| [#58](https://github.com/tomisu/FlappyBird/pull/58) | caiman10 | src/Controllers/Julen.js | c576020b34076cd6b504d26487b1a1a0e53377a6 |
| [#59](https://github.com/tomisu/FlappyBird/pull/59) | minisuster | src/Controllers/Unai.js | 6583081f9852055891fe7e62c0786ca347ffccf9 |
| [#60](https://github.com/tomisu/FlappyBird/pull/60) | Jesusito2135 | src/Controllers/Jesus.js | 3e58b54330243ecfd2ff8ecb70c97bf7ad705861 |
| [#61](https://github.com/tomisu/FlappyBird/pull/61) | JBcL14 | src/Controllers/Javier.js | 5d1b2f12d0c4b41ecd910ee599935c8609efc6aa |
| [#62](https://github.com/tomisu/FlappyBird/pull/62) | manuelmanass | src/Controllers/Manuel.js | daa1aead93d52f62aab9c65508a1d281465b8063 |
| [#63](https://github.com/tomisu/FlappyBird/pull/63) | rodriguez154198 | src/Controllers/Julia.js | f00519158964a6c7d9dd67306d867516dba9c291 |
| [#64](https://github.com/tomisu/FlappyBird/pull/64) | inakizabaleta7-gif | src/Controllers/inaki.js | 9e8f276ddbd33e108f99dfa07463933998924bb2 |
| [#65](https://github.com/tomisu/FlappyBird/pull/65) | mirencuor | src/Controllers/Miren.js | 39bb4e96280927340b430e36166ff8faff040cbd |
| [#66](https://github.com/tomisu/FlappyBird/pull/66) | laurabengoechea2010 | src/Controllers/Laura.js | 5e3783fe30ca5dbb23340c61e64bc23779383137 |

## Integration repairs

- anas.js (#48): close constructor, remove duplicate leftover block/export, and define suelo as scene.height - scene.floor.
- Unai.js (#59): call the existing obtenerPosicionY helper instead of the undefined posicionYIdeal.
- inaki.js (#64), InigoYaniz.js (#54), JavierLarramendi.js (#57): give each a distinct student display name instead of Tomas, preventing scoreboard collisions.

Superseded PRs excluded: #39, #42, #49, #55.
