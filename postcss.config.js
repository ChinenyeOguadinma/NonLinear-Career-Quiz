module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

4. **Commit changes**

✅ **File 4 done!**

---

### FILE 5: .gitignore

1. **"Add file"** → **"Create new file"**
2. Name: `.gitignore` (note the dot at the beginning!)
3. Paste:
```
node_modules
/.next/
/out/
.DS_Store
*.pem
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.env*.local
.vercel
*.tsbuildinfo
next-env.d.ts
