# Instructions for Setting Up the Definitiv Frontend Project

## Prerequisites
- Windows computer with Cursor IDE installed
- Claude Desktop application installed

---

## Step 0: Check and Install Required Software

### 0.1 Check if Git is Installed
1. Open **Command Prompt** or **PowerShell** (press `Win + R`, type `cmd`, press Enter)
2. Type this command and press Enter:
   ```bash
   git --version
   ```
3. **If you see a version number** (like `git version 2.40.0.windows.1`):
   - ✅ Git is already installed! Skip to section 0.2
4. **If you see "git is not recognized" or similar error**:
   - ❌ Git is not installed. Follow the installation steps below

#### Install Git (if not already installed)
1. Go to https://git-scm.com/download/win
2. Download the latest version for Windows
3. Run the installer and follow these settings:
   - **Use Git from Git Bash only** (recommended)
   - **Use bundled OpenSSH** (recommended)
   - **Use the OpenSSL library** (recommended)
   - **Checkout as-is, commit Unix-style line endings** (recommended)
   - **Use MinTTY** (recommended)
   - **Git Pull: Default** (recommended)
   - **Credential helper: Git Credential Manager** (recommended)
   - **Enable file system caching** (recommended)
4. Click **Install** and wait for completion
5. **Restart your computer** after installation
6. **Verify installation**: Open a new Command Prompt and run `git --version` again

### 0.2 Check if Node.js is Installed
1. In the same Command Prompt, type this command and press Enter:
   ```bash
   node --version
   ```
2. **If you see a version number** (like `v18.17.0`):
   - ✅ Node.js is already installed! Continue to check npm
3. **If you see "node is not recognized" or similar error**:
   - ❌ Node.js is not installed. Follow the installation steps below

#### Install Node.js (if not already installed)
1. Go to https://nodejs.org/
2. Download the **LTS version** (recommended for most users)
3. Run the installer and follow these settings:
   - Accept the license agreement
   - Choose installation location (default is fine)
   - Select components (keep all default options)
   - Click **Install**
4. Wait for installation to complete
5. Click **Finish**
6. **Restart your computer** after installation
7. **Verify installation**: Open a new Command Prompt and run `node --version` again

### 0.3 Check if npm is Installed
1. In the same Command Prompt, type this command and press Enter:
   ```bash
   npm --version
   ```
2. **If you see a version number** (like `9.6.7`):
   - ✅ npm is already installed! You're ready to proceed
3. **If you see "npm is not recognized" or similar error**:
   - ❌ npm is not installed or Node.js installation was incomplete
   - **Solution**: Reinstall Node.js (npm comes bundled with Node.js)

### 0.4 Final Verification
Run these three commands to make sure everything is working:
```bash
git --version
node --version
npm --version
```
All three should show version numbers. If any fail, restart your computer and try again.

---

## Step 1: Clone the Repository Branch

### 1.1 Open Cursor IDE
- Launch Cursor IDE on your Windows computer
- Close any existing projects if they're open

### 1.2 Clone the Repository
1. In Cursor, go to **File** → **Clone Repository** (or press `Ctrl+Shift+P` and type "Git: Clone")
2. Enter the repository URL: `https://github.com/TAG-APAC-Division/definitiv.git`
3. Click **Clone**

### 1.3 Authentication (if required)
- If prompted for authentication:
  - Choose **GitHub** as the authentication method
  - Sign in with your GitHub credentials
  - If you don't have access, contact your team lead for repository permissions

### 1.4 Switch to the Correct Branch
1. Once the repository is cloned, open the Command Palette (`Ctrl+Shift+P`)
2. Type "Git: Checkout to..." and select it
3. Choose "devin/1754463698-storybook-shadcn-stories" from the branch list
4. Wait for the branch switch to complete

---

## Step 2: Install Dependencies and Start Storybook

### 2.1 Navigate to the Correct Folder
1. In Cursor's file explorer (left sidebar), expand the `definitiv` folder
2. Find and click on the `Definitiv.FrontEnd.UIComponents` folder
3. Right-click on this folder and select **"Open in Integrated Terminal"**

### 2.2 Install Dependencies
1. In the terminal that opens, run:
   ```bash
   npm install
   ```
2. Wait for the installation to complete (this may take 2-5 minutes)
3. You should see a success message and a `node_modules` folder will be created

### 2.3 Start Storybook
1. In the same terminal, run:
   ```bash
   npm run storybook
   ```
2. Wait for Storybook to start (you'll see build progress in the terminal)
3. Once complete, you should see a message like: "Storybook 9.1.1 started on port 6006"
4. Your default web browser should automatically open to `http://localhost:6006`
5. If the browser doesn't open automatically, manually navigate to `http://localhost:6006`

### 2.4 Verify Storybook is Running
- You should see the Storybook interface with a sidebar showing various component stories
- The page should load without errors
- Keep this terminal window open - closing it will stop Storybook

---

## Step 3: Configure Claude Desktop with Filesystem Connector

### 3.1 Open Claude Desktop
- Launch the Claude Desktop application on your computer
- Sign in if required

### 3.2 Add Filesystem Connector
1. In Claude Desktop, look for the **Connectors** section (usually in the sidebar or settings)
2. Click **"Add Connector"** or **"Connect Data Source"**
3. Select **"Filesystem"** from the available connector types

### 3.3 Configure the Connector
1. In the filesystem connector configuration:
   - **Path**: Browse to and select the `Definitiv.FrontEnd.UIComponents` folder
   - The full path will look something like: `C:\Users\[YourUsername]\...\definitiv\Definitiv.FrontEnd.UIComponents`
2. **File Types**: Make sure these are included:
   - `.js`, `.ts`, `.svelte`, `.json`, `.md`, `.css`, `.html`
3. Click **"Connect"** or **"Save"**

### 3.4 Verify Connection
- Claude should now have access to all the files in the Definitiv.FrontEnd.UIComponents folder
- You can test this by asking Claude about the project structure or specific files

---

## Troubleshooting

### If Git installation fails:
- Make sure you're running the installer as Administrator
- Check that Windows Defender or antivirus isn't blocking the installation
- Try downloading from a different browser

### If Node.js/npm installation fails:
- Make sure you have Windows 10 or later
- Try running the installer as Administrator
- If you get "Access Denied" errors, temporarily disable antivirus

### If npm install fails:
- Make sure you have Node.js version 18+ installed
- Try running `npm cache clean --force` before `npm install`
- Check your internet connection
- If you get permission errors, try running Command Prompt as Administrator

### If Storybook won't start:
- Make sure no other application is using port 6006
- Try running `npm run build-storybook` first
- Check the terminal for specific error messages

### If Claude can't connect to the filesystem:
- Make sure the path is correct and the folder exists
- Try restarting Claude Desktop
- Check that you have read permissions for the folder

### If you get authentication errors:
- Contact your team lead for GitHub repository access
- Make sure you're using the correct GitHub account

---

## Success Indicators
✅ Git installed and working (`git --version` shows version)  
✅ Node.js installed and working (`node --version` shows version)  
✅ npm installed and working (`npm --version` shows version)  
✅ Repository cloned successfully  
✅ Branch switched to `devin/1754463698-storybook-shadcn-stories`  
✅ `npm install` completed without errors  
✅ Storybook running on `http://localhost:6006`  
✅ Claude Desktop connected to the Definitiv.FrontEnd.UIComponents folder  

You're now ready to work with the Definitiv frontend components!