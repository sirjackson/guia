/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
  map: {
    'ngx-bar-rating': 'node_modules/ngx-bar-rating/bundles/ngx-bar-rating.umd.js',
    '@angular/material': 'npm:@angular/material/bundles/material.umd.js',
    '@ng-bootstrap/ng-bootstrap': 'node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js'
  }
}
