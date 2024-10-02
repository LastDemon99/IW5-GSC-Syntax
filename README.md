# IW5 GSC Syntax
> **Note**: **This extension is currently under development**. Due to limited time, the autocompletes, functions, fields, notifies, etc., have been generated automatically by a script from raw files. There has been no manual verification, so please be aware of potential inconsistencies.

This extension is a fork of the CoD-Sense extension, with gsc syntax highlight and numerous additional features for IW5 and the Plutonium environment. The Features will only work in files located in the scripts path: **%localappdata%/plutonium/storage/iw5**

You can find this extension in the Visual Studio Code marketplace: [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=LastDemon99.lb-iw5-gsc)

### Documentation: [GSC Documentation](https://lastdemon99.github.io/IW5-Documentation/index_gsc.html)

# Change Log

## 1.5.2:
- **Autocomplete**: Autocomplete support for functions, some structure fields, and include paths.
- **Function Renaming**: Easily rename functions with F2.
- **Go to Definition**: Quickly navigate to function declarations with ctrl + click.
- **Script Download**: Option to download scripts from a GitHub url.

-------------------------------------------------------------

## 1.5.3:
- **Autocomplete**: Autocomplete support for variables within the function scope.
- **Function Renaming**: Easily rename variables within the function scope.
- **Go to Definition**: Quickly navigate to variable declarations within the function scope.
- **Function Documentation**: Read and display docstrings from files to show arguments and descriptions of functions. `snippets: #docstring`

-------------------------------------------------------------

## 1.5.4:
- **Fix Readme Error**

-------------------------------------------------------------

## 1.5.5:
- **Hover Provider**: Added a hover provider, when hovering over a function, a window will display its documentation if available.
- **Folding Region**: Added the functionality of folding regions to facilitate code organization.
- **Go to Definition**: Now this functionality can be used on paths.
- **Minor Fixes**: Several minor issues have been resolved to improve and fix certain features.

-------------------------------------------------------------

## 1.5.6:
- **Autocomplete**: Added autocompletions for waittils arguments, defines constants, and mod damages.
- **File Renaming**: Renaming or moving files will now also auto rename includes.
- **Expanded File Scope**: The extension now observes files in the entire `iw5/` workspace, not just `iw5/scripts`.
- **Folding**: Added folding functionality to functions and multiline comments.
- **Hover Highlighting**: Added highlighting in hover code documentation.
- **Minor Fixes**: Several minor issues have been resolved to improve and fix certain features.
- **Removed Script Download**: Despite the creation a version with marketplace panel due to the API rate limit, this feature will be removed for now.

## Sponsor
<a href="https://www.paypal.com/paypalme/lastdemon99/"><img src="https://github.com/LastDemon99/LastDemon99/blob/main/Data/paypal_dark.svg" height="60"></a>
