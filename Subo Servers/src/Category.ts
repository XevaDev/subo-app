type subcat = { name: string; id: number };
type onsubdiff = { id: number; name: string; oldName: string };

class Category {
  public name: string;
  public id: number;
  public subcats?: subcat[] = [];
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }

  addSubcat(name: string, id: number) {
    this.subcats?.push({ name: name, id: id });
  }

  removeSubcat(id: number) {
    this.subcats = this.subcats?.filter((d) => {
      d.id !== id;
    });
  }

  setName(name: string) {
    this.name = name;
  }

  editSubcatName(id: number, newName: string) {
    this.removeSubcat(id);
    this.addSubcat(newName, id);
  }

  onSubcatEdit(id: number): Promise<{ status: onsubdiff; end: () => void }> {
    return new Promise((resolve, reject) => {
      let subcatt = this.subcats?.find((j) => j.id === id);
      if (typeof subcatt === "undefined") {
        reject();
      }

      let a: subcat | undefined;
      let interval = setInterval(() => {
        if (
          typeof a !== "undefined" &&
          typeof subcatt !== "undefined" &&
          subcatt?.name !== a.name
        ) {
          resolve({
            status: { name: subcatt.name, id: subcatt.id, oldName: a.name },
            end: () => {
              clearInterval(interval);
            },
          });
        }

        a = subcatt;
      }, 0);
    });
  }

  get listSubcats(): subcat[] {
    return this.subcats || [];
  }
}

export = Category;
