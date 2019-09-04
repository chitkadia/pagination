# TkPagination

This Angular 4+ package is used to apply pagination to your grid. It's the basic pagination with support of most of all the functionality like navigation to other page, selection of per page etc..

## DEMO
You can check the integrated code in this [StackBlitz](https://stackblitz.com/edit/angular-ofjhdr).
You can also check the working demo APP [here](https://angular-ofjhdr.stackblitz.io)

## Usage

```bash
npm install tk-pagination --save
```

Import module

```ts
import { TkPaginationModule } from 'tk-pagination';

@NgModule({
  imports: [
    TkPaginationModule
  ]
})
```

Use in your component:

```html
<tkl-pagination
[count]="data.length"
[page]="currentPage"
[perPage]="perPage"
[pagination]="pagination"
[footerTextStyle]="footerStyle"
(goPage)="getThisPage($event)"
(setPageSize)="onChangePerPage($event)"
class="pagination-tag-width">
</tkl-pagination>
```
## @Input & @Output Events
|Property	|Type	|Default	|Description	|
|:--- |:--- |:--- |:--- |
|count|number|0|Total number of records.|
|page|number|1|Current active page.|
|perPage|number|first element of pagination array|Perpage stands for the total number of records you want to show in page. Always set first element of pagination array by default.|
|pagination|Array|[5, 25, 50, 100]|Array of elements which you want to show in the dropdown of the Items per page.|
|footerTextStyle|Object|{'color': "white",'background-color': "#4BAD94"}|If you want to change the background-color of selected active page or want to add additional style then you can pass in this input variable.|
|dropdownText|string|Items per page: |This text is used to show the label before the dropdown to select the records per page.|
|goPage|Output Emitter|-|Set your own function. It will give you the selected page number in response|
|setPageSize|Output Emitter|-|When you click on any option from the dropdown of page selection then this emitter is called and give you the selected page value in response.|

You can use below example to test the code:

```ts
users: any = [];
pagination: Array<any> = [5, 25, 50, 100];
currentPage: number = 1;
perPage: number = this.pagination[0];
userData: Array<any> = [
    {
        id: 1,
        city: "Ahmedabad"
    },
    {
        id: 2,
        city: "Baroda"
    },
    {
        id: 3,
        city: "Rajkot"
    },
    {
        id: 4,
        city: "Mehsana"
    },
    {
        id: 5,
        city: "Surat"
    },
    {
        id: 6,
        city: "Gandhinagar"
    },
    {
        id: 7,
        city: "Chennai"
    },
    {
        id: 8,
        city: "Mumbai"
    },
    {
        id: 9,
        city: "Delhi"
    },
    {
        id: 10,
        city: "Udaipur"
    },
    {
        id: 11,
        city: "Jaipur"
    },
    {
        id: 12,
        city: "Jaisalmer"
    },
    {
        id: 13,
        city: "Amritsar"
    },
    {
        id: 14,
        city: "Leh"
    },
    {
        id: 15,
        city: "Shrinagar"
    },
    {
        id: 16,
        city: "Dehradun"
    },
    {
        id: 17,
        city: "Masoorie"
    },
    {
        id: 18,
        city: "Delhousi"
    },
    {
        id: 19,
        city: "Bhuj"
    },
    {
        id: 20,
        city: "Somnath"
    },
    {
        id: 21,
        city: "New York"
    }
];

ngOnInit() {
    this.updateUsersObject(this.userData);
}

updateUsersObject(mainArray) {
    this.userData = mainArray;
    this.users = [];
    let offset = (this.currentPage - 1) * this.perPage;
    let lastElement = (this.currentPage * this.perPage) - 1;
    for(let userIndex = offset; userIndex <= lastElement; userIndex++) {
        let checkIndex = userIndex+1;
        if (mainArray.length >= checkIndex) {
            this.users.push(mainArray[userIndex]);
        }
    }
}

getThisPage(cur_page) {
    this.currentPage = cur_page;
    this.updateUsersObject(this.userData);
}

onChangePerPage(perPage) {
    this.perPage = parseInt(perPage);
    this.currentPage = 1;
    this.updateUsersObject(this.userData);
}
```

## Want to run locally
- Clone the repository or downlod the .zip,.tar files.
- Run `npm install`
- Run `ng serve`
- Navigate to `http://localhost:4200/`

## License
MIT License.

## Author
Tarak Kadiya (chitkadia@gmail.com)