export const registerSettings = function() {
    // Register any custom system settings here
    game.settings.register("TheWitcherTRPG", "useOptionnalAdrenaline", {
        name: "WITCHER.Settings.Adrenaline",
        hint: "WITCHER.Settings.AdrenalineDetails",
        scope: "world",
        config: true,
        type: Boolean,
        default: false
      });
    game.settings.register("TheWitcherTRPG", "displayRollsDetails", {
        name: "WITCHER.Settings.displayRollDetails",
        hint: "WITCHER.Settings.displayRollDetailsHint",
        scope: "world",
        config: true,
        type: Boolean,
        default: false
      });
    game.settings.register("TheWitcherTRPG", "useWitcherFont", {
        name: "WITCHER.Settings.specialFont",
        scope: "world",
        config: true,
        type: Boolean,
        default: false
      });
    game.settings.register("TheWitcherTRPG", "displayRep", {
        name: "WITCHER.Settings.displayReputation",
        hint: "WITCHER.Settings.displayReputationHint",
        scope: "world",
        config: true,
        type: Boolean,
        default: false
      });
    game.settings.register("TheWitcherTRPG", "useOptionnalVerbalCombat", {
        name: "WITCHER.Settings.useVerbalCombatRule",
        hint: "WITCHER.Settings.useVerbalCombatRuleHint",
        scope: "world",
        config: true,
        type: Boolean,
        default: false
      });
}