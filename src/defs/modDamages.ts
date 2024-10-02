import { CompletionItem, CompletionItemKind } from 'vscode';

export const damageCompletions: CompletionItem[] = [
    new CompletionItem('"MOD_GRENADE"', CompletionItemKind.Constant),
    new CompletionItem('"MOD_GRENADE_SPLASH"', CompletionItemKind.Constant),
    new CompletionItem('"MOD_MELEE"', CompletionItemKind.Constant),
    new CompletionItem('"MOD_CRUSH"', CompletionItemKind.Constant),
    new CompletionItem('"MOD_IMPACT"', CompletionItemKind.Constant),
    new CompletionItem('"MOD_UNKNOWN"', CompletionItemKind.Constant),
    new CompletionItem('"MOD_PISTOL_BULLET"', CompletionItemKind.Constant),
    new CompletionItem('"MOD_RIFLE_BULLET"', CompletionItemKind.Constant),
    new CompletionItem('"MOD_PROJECTILE"', CompletionItemKind.Constant),
    new CompletionItem('"MOD_PROJECTILE_SPLASH"', CompletionItemKind.Constant),
    new CompletionItem('"MOD_HEAD_SHOT"', CompletionItemKind.Constant),
    new CompletionItem('"MOD_TELEFRAG"', CompletionItemKind.Constant),
    new CompletionItem('"MOD_FALLING"', CompletionItemKind.Constant),
    new CompletionItem('"MOD_SUICIDE"', CompletionItemKind.Constant),
    new CompletionItem('"MOD_TRIGGER_HURT"', CompletionItemKind.Constant),
    new CompletionItem('"MOD_EXPLOSIVE"', CompletionItemKind.Constant),
];
