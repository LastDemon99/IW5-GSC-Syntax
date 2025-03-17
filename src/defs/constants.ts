import { CompletionItem, CompletionItemKind, SnippetString, MarkdownString } from 'vscode';

export const triggers: CompletionItem[] = [
    new CompletionItem('font', CompletionItemKind.Enum),
    new CompletionItem('point', CompletionItemKind.Enum),
    new CompletionItem('mod', CompletionItemKind.Enum),
    new CompletionItem('bind', CompletionItemKind.Enum),
    new CompletionItem('color', CompletionItemKind.Enum),
    new CompletionItem('textColor', CompletionItemKind.Enum)
];

export const fonts: CompletionItem[] = [];
export const font_list = ['"default"', '"objective"', '"bigfixed"', '"smallfixed"', '"hudsmall"'];
font_list.forEach(keyword => fonts.push(new CompletionItem(keyword, CompletionItemKind.Constant)));

export const points: CompletionItem[] = [];
export const point_list = ['"LEFT"', '"RIGHT"', '"BOTTOM"', '"BOTTOM LEFT"', '"BOTTOM RIGHT"', '"TOP"', '"TOP LEFT"', '"TOP RIGHT"', '"CENTER"'];
point_list.forEach(keyword => points.push(new CompletionItem(keyword, CompletionItemKind.Constant)));

export const mods: CompletionItem[] = [];
export const mod_list = ['"MOD_GRENADE"', '"MOD_GRENADE_SPLASH"', '"MOD_MELEE"', '"MOD_CRUSH"', '"MOD_IMPACT"', '"MOD_UNKNOWN"', '"MOD_PISTOL_BULLET"', '"MOD_RIFLE_BULLET"', 
    '"MOD_PROJECTILE"', '"MOD_PROJECTILE_SPLASH"', '"MOD_HEAD_SHOT"', '"MOD_TELEFRAG"', '"MOD_FALLING"', '"MOD_SUICIDE"', '"MOD_TRIGGER_HURT"', '"MOD_EXPLOSIVE"'];
mod_list.forEach(keyword => mods.push(new CompletionItem(keyword, CompletionItemKind.Constant)));

export const colors: CompletionItem[] = [];
export const color_map: { [key: string]: { rgb: string; hex: string } } = {
    "picker": { rgb: "picker", hex: "#000000" },
    "blue": { rgb: "(0.25, 0.25, 0.75)", hex: "#4040BF" },
    "red": { rgb: "(0.75, 0.25, 0.25)", hex: "#BF4040" },
    "white": { rgb: "(1.0, 1.0, 1.0)", hex: "#FFFFFF" },
    "black": { rgb: "(0.0, 0.0, 0.0)", hex: "#000000" },
    "green": { rgb: "(0.25, 0.75, 0.25)", hex: "#40BF40" },
    "yellow": { rgb: "(0.65, 0.65, 0.0)", hex: "#A6A600" },
    "orange": { rgb: "(1.0, 0.45, 0.0)", hex: "#FF7300" },
    "cyan": { rgb: "(0.0, 1.0, 1.0)", hex: "#00FFFF" },
    "magenta": { rgb: "(1.0, 0.0, 1.0)", hex: "#FF00FF" },
    "gray": { rgb: "(0.5, 0.5, 0.5)", hex: "#808080" },
    "lightblue": { rgb: "(0.53, 0.81, 0.98)", hex: "#87CEFA" },
    "darkblue": { rgb: "(0.0, 0.0, 0.55)", hex: "#00008B" },
    "lime": { rgb: "(0.0, 1.0, 0.0)", hex: "#00FF00" },
    "pink": { rgb: "(1.0, 0.75, 0.8)", hex: "#FFC0CB" },
    "purple": { rgb: "(0.5, 0.0, 0.5)", hex: "#800080" },
    "brown": { rgb: "(0.65, 0.16, 0.16)", hex: "#A52A2A" },
    "gold": { rgb: "(1.0, 0.84, 0.0)", hex: "#FFD700" },
    "silver": { rgb: "(0.75, 0.75, 0.75)", hex: "#C0C0C0" },
    "beige": { rgb: "(0.96, 0.96, 0.86)", hex: "#F5F5DC" },
    "olive": { rgb: "(0.5, 0.5, 0.0)", hex: "#808000" },
    "teal": { rgb: "(0.0, 0.5, 0.5)", hex: "#008080" },
    "navy": { rgb: "(0.0, 0.0, 0.5)", hex: "#000080" },
    "maroon": { rgb: "(0.5, 0.0, 0.0)", hex: "#800000" },
    "coral": { rgb: "(1.0, 0.5, 0.31)", hex: "#FF7F50" },
    "ivory": { rgb: "(1.0, 1.0, 0.94)", hex: "#FFFFF0" },
    "lavender": { rgb: "(0.9, 0.9, 0.98)", hex: "#E6E6FA" }
};
Object.entries(color_map).forEach(([color, { rgb, hex }]) => {
    const item = new CompletionItem(color, CompletionItemKind.Constant);
    item.insertText = new SnippetString(rgb);
    item.documentation = new MarkdownString(`![${hex}](https://singlecolorimage.com/get/${hex.slice(1)}/10x10) \`${color}\` ${rgb}\n\n`);
    colors.push(item);
});

export const textColors: CompletionItem[] = [];
export const textColor_map: { [key: string]: { iw5_Symbol: string; hex: string } } = { 
    "red": { iw5_Symbol: "^1", hex: "#BF4040" },
    "green": { iw5_Symbol: "^2", hex: "#40BF40" },
    "yellow": { iw5_Symbol: "^3", hex: "#FFFF00" },
    "blue": { iw5_Symbol: "^4", hex: "#4040BF" },
    "lightblue": { iw5_Symbol: "^5", hex: "#87CEFA" },
    "purple": { iw5_Symbol: "^6", hex: "#800080" },
    "white": { iw5_Symbol: "^7", hex: "#FFFFFF" },
    "defmapcolor": { iw5_Symbol: "^8", hex: "#BD815C" },
    "grey": { iw5_Symbol: "^9", hex: "#808080" },
    "black": { iw5_Symbol: "^0", hex: "#000000" },
    "yaleblue": { iw5_Symbol: "^;", hex: "#0F4D92" },
    "orange": { iw5_Symbol: "^:", hex: "#FFA500" }
};
Object.entries(textColor_map).forEach(([color, { iw5_Symbol, hex }]) => {
    const item = new CompletionItem(color, CompletionItemKind.Constant);
    item.insertText = new SnippetString(iw5_Symbol);
    item.documentation = new MarkdownString(`![${hex}](https://singlecolorimage.com/get/${hex.slice(1)}/10x10) \`${color}\` ${iw5_Symbol}\n\n`);
    textColors.push(item);
});

export const binds: CompletionItem[] = [];
export const bind_list = [
    '"+scores"', '"-scores"',
    '"togglemenu"',
    '"+gostand"', '"-gostand"',
    '"weapnext"',
    '"+actionslot 3"', '"-actionslot 3"',
    '"+actionslot 4"', '"-actionslot 4"',
    '"+actionslot 5"', '"-actionslot 5"',
    '"+actionslot 6"', '"-actionslot 6"',
    '"+actionslot 7"', '"-actionslot 7"',
    '"+moveleft"', '"-moveleft"',
    '"togglecrouch"',
    '"+moveright"', '"-moveright"',
    '"+melee_zoom"', '"-melee_zoom"',
    '"+activate"', '"-activate"',
    '"+frag"', '"-frag"',
    '"+actionslot 1"', '"-actionslot 1"',
    '"+smoke"', '"-smoke"',
    '"+reload"', '"-reload"',
    '"+back"', '"-back"',
    '"chatmodepublic"',
    '"+forward"', '"-forward"',
    '"chatmodeteam"',
    '"+talk"', '"-talk"',
    '"toggleprone"',
    '"+breath_sprint"', '"-breath_sprint"',
    '"+attack"', '"-attack"',
    '"+speed_throw"', '"-speed_throw"'
];
bind_list.forEach(keyword => binds.push(new CompletionItem(keyword, CompletionItemKind.Constant)));

export const game: CompletionItem[] = [
    new CompletionItem('game["state"]', CompletionItemKind.Constant),
    new CompletionItem('game["teamScores"]', CompletionItemKind.Constant),
    new CompletionItem('game["teamScores"]["allies"]', CompletionItemKind.Constant),
    new CompletionItem('game["teamScores"]["axis"]', CompletionItemKind.Constant),
    new CompletionItem('game["defcon"]', CompletionItemKind.Constant),
    new CompletionItem('game["entity_headicon_allies"]', CompletionItemKind.Constant),
    new CompletionItem('game["entity_headicon_axis"]', CompletionItemKind.Constant),
    new CompletionItem('game["thermal_vision"]', CompletionItemKind.Constant),
    new CompletionItem('game["gamestarted"]', CompletionItemKind.Constant),
    new CompletionItem('game["menu_team"]', CompletionItemKind.Constant),
    new CompletionItem('game["status"]', CompletionItemKind.Constant),
    new CompletionItem('game["icons"]', CompletionItemKind.Constant),
    new CompletionItem('game["icons"]["allies"]', CompletionItemKind.Constant),
    new CompletionItem('game["icons"]["axis"]', CompletionItemKind.Constant),
    new CompletionItem('game["menu_endgameupdate"]', CompletionItemKind.Constant),
    new CompletionItem('game["strings"]', CompletionItemKind.Constant),
    new CompletionItem('game["roundMillisecondsAlreadyPassed"]', CompletionItemKind.Constant),
    new CompletionItem('game["switchedsides"]', CompletionItemKind.Constant),
    new CompletionItem('game["roundsWon"]', CompletionItemKind.Constant),
    new CompletionItem('game["roundsWon"]["allies"]', CompletionItemKind.Constant),
    new CompletionItem('game["roundsWon"]["axis"]', CompletionItemKind.Constant),
    new CompletionItem('game["defenders"]', CompletionItemKind.Constant),
    new CompletionItem('game["roundsPlayed"]', CompletionItemKind.Constant),
    new CompletionItem('game["clientid"]', CompletionItemKind.Constant),
    new CompletionItem('game["allies"]', CompletionItemKind.Constant),
    new CompletionItem('game["axis"]', CompletionItemKind.Constant),
    new CompletionItem('game["attackers"]', CompletionItemKind.Constant),
    new CompletionItem('game["colors"]', CompletionItemKind.Constant),
    new CompletionItem('game["colors"]["blue"]', CompletionItemKind.Constant),
    new CompletionItem('game["colors"]["red"]', CompletionItemKind.Constant),
    new CompletionItem('game["colors"]["white"]', CompletionItemKind.Constant),
    new CompletionItem('game["colors"]["black"]', CompletionItemKind.Constant),
    new CompletionItem('game["colors"]["green"]', CompletionItemKind.Constant),
    new CompletionItem('game["colors"]["yellow"]', CompletionItemKind.Constant),
    new CompletionItem('game["colors"]["orange"]', CompletionItemKind.Constant),
    new CompletionItem('game["colors"]["allies"]', CompletionItemKind.Constant),
    new CompletionItem('game["colors"]["axis"]', CompletionItemKind.Constant),
    new CompletionItem('game["timePassed"]', CompletionItemKind.Constant),
    new CompletionItem('game["clientMatchDataDef"]', CompletionItemKind.Constant),
    new CompletionItem('game["inNukeOvertime"]', CompletionItemKind.Constant)
];
