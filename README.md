# DATA-SHELL [![](https://img.shields.io/badge/Javascript-2b2b2b)](#) [![](https://img.shields.io/badge/React-2b2b2b)](#) [![](https://img.shields.io/badge/UI%20Components-2b2b2b)](#) [![](https://img.shields.io/badge/v1.0.12.2025-ff4769)](#) 

[![](https://img.shields.io/badge/Watch%20Introduction%20Video%20On%20youtube-de4053?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.ir) 

[![](https://img.shields.io/badge/cheat%20code%20page%20is%20available-5253C3?style=for-the-badge&logo=shell&logoColor=white)](#) 

## Introduction

**Hi I'm Ali** & This Project is Some **Simple** & **Pure** HTML/CSS ***Components*** , In Just One Line of Code Called **Data Shell**.

## Installation

### Install Using CDNs :

``` 
<body>
    ...
    ....
    
    <script src="https://cdn.jsdelivr.net/npm/@aliamdevs/data-shell@latest/bundler/bundles/CDNs/data-shell.bundle.js" ></script>
</body> 
```

### Install Using npm Package Manager :

```
npm i @aliamdevs/data-shell
```

## Usage :
#### In React Use Like This :
```
import { DataShellEnv } from '@aliamdevs/data-shell'

<DataShellEnv style={...your_styles} className={...your_classes}
    shell="
        Your Data-Shell Commands ...
    "
/>
```

#### In Node.js For Using By Hooks You Can Use ;
```
import {useDataShell} from '@aliamdevs/data-shell'

useDataShell();

// -> In HTML File Or Source :
    <div style="...your_styles" class="...your_classes"
        data-shell="
            Your Data-Shell Commands ...
        "
    >
```
#### It Render Once All Data-Shell
#### If You Use CDNs in Pure HTML Pages Or Any Thing Beside JS Frameworks It Will Call By Himself So Don't Do Anything else Just Create Your Elements By `data-shell` Attribute Like Upthere.

### Write Your Commands Now :