# React Spring Type Issue Reproduction

Issue: https://github.com/pmndrs/react-spring/issues/2173

## Steps to reproduce

```
npm install
npm start
```

### Output:
```
node_modules/@react-spring/shared/dist/react-spring_shared.modern.d.ts:2:30 - error TS2307: Cannot find module '@react-spring/rafz' or its corresponding type declarations.

2 export { Timeout, raf } from '@react-spring/rafz';
                               ~~~~~~~~~~~~~~~~~~~~
```
