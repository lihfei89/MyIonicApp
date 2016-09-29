import { Component } from '@angular/core';
import { Page1 } from '../page1/page1';
import { Page2 } from '../page2/page2';
import { UserCenter } from '../usercenter/usercenter';

import {Tabs} from 'ionic-angular';
import {Injectable,ViewChild} from '@angular/core';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  @ViewChild('mainTabs') tabRef:Tabs;
  
  public tab1Root: any;
  public tab2Root: any;
  public tab3Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = Page1;
    this.tab2Root = Page2;
    this.tab3Root = UserCenter;
  }
  
  ionViewDidEnter() {    
      this.tabRef.select(2);   
  }
}
