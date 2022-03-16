export enum CharacterTemplates {
  MtMTuxedo = "Tuxedo",
  MtMTrenchcoat = "Trenchcoat",
  ChargeRPG = "ChargeRPG",
  Blank = "Blank",
}

export type ICharacterTemplateWithGroup = {
  template: CharacterTemplates;
  group: string;
};

export const CharacterTemplatesWithGroups: Array<ICharacterTemplateWithGroup> =
  [
    { group: "Minutes to Midnight", template: CharacterTemplates.MtMTuxedo },
    { group: "Minutes to Midnight", template: CharacterTemplates.MtMTrenchcoat },
    { group: "Fari Games", template: CharacterTemplates.ChargeRPG },
    { group: "Blank", template: CharacterTemplates.Blank },
  ];
