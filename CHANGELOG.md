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

-------------------------------------------------------------

## 1.5.7:
- **Snippets**: Added snippets for directives, hudpoint, font, textcolor, and notifyData.
- **Completions**: Included missing functions and keywords, along with trigger-based completions for `font.`, `point.`, `mod.`, `bind.`, `color.`, and `textColor.`.
- **Hovers**: Improved the implementation of the hover provider.
- **Syntax Highlight**: Added missing keywords, and the IW5 `text color lang` will now be highlighted.
- **Rename Fixed**: Fixed function renaming, ensuring renaming a function updates across all files.
- **Folding Fixed**: Resolved function folding issues.
- **Minor Fixes**: Addressed several minor issues to enhance and fix certain features.
