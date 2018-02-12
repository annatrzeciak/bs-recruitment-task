import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterUsers"
})
export class FilterUsersPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return (
        it.FirstName.toLowerCase().includes(searchText) ||
        it.LastName.toLowerCase().includes(searchText) ||
        it.Username.toLowerCase().includes(searchText) ||
        it.Email.toLowerCase().includes(searchText)
      );
    });
  }
}
