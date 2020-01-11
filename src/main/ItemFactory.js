{
  /**
   * @param {int} hpRestored
   * @return InventoryItem
   */
  function createPotion(hpRestored) {
    const { ItemCategory } = window.jwb.types;
    return new InventoryItem('Potion', ItemCategory.POTION, (item, unit) => {
      unit.currentHP = Math.min(unit.currentHP + hpRestored, unit.maxHP);
    });
  }

  function createSword(damage) {
    const { ItemCategory, EquipmentCategory, Stats } = window.jwb.types;
    return new InventoryItem('Sword of Suck', ItemCategory.WEAPON, (item, unit) => {
      const equippedSword = new EquippedItem('Sword of Suck', EquipmentCategory.WEAPON, item, { [Stats.DAMAGE]: 10 });
      unit.equipment[EquipmentCategory.WEAPON] = equippedSword;
    });
  }

  window.jwb.ItemFactory = {
    createPotion,
    createSword
  };
}