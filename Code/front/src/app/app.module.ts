import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { ContactComponent } from './app/contact/contact.component';
import { AuthComponent } from './app/auth/auth.component';
import { LoginComponent } from './app/auth/login/login.component';
import { RegisterComponent } from './app/auth/register/register.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { ProfileComponent } from './app/dashboard/profile/profile.component';
import { SettingsComponent } from './app/dashboard/settings/settings.component';
import { GamesComponent } from './app/games/games.component';
import { GameCardComponent } from './app/games/game-card/game-card.component';
import { ShopComponent } from './app/shop/shop.component';
import { ProductListComponent } from './app/shop/product-list/product-list.component';
import { ProductDetailComponent } from './app/shop/product-detail/product-detail.component';
import { CartComponent } from './app/shop/cart/cart.component';
import { CheckoutComponent } from './app/shop/checkout/checkout.component';
import { BlogComponent } from './app/blog/blog.component';
import { BlogPostListComponent } from './app/blog/blog-post-list/blog-post-list.component';
import { BlogPostDetailComponent } from './app/blog/blog-post-detail/blog-post-detail.component';
import { ForumComponent } from './app/forum/forum.component';
import { ForumCategoryListComponent } from './app/forum/forum-category-list/forum-category-list.component';
import { ForumTopicListComponent } from './app/forum/forum-topic-list/forum-topic-list.component';
import { ForumTopicDetailComponent } from './app/forum/forum-topic-detail/forum-topic-detail.component';
import { ChatComponent } from './app/chat/chat.component';
import { ChatRoomComponent } from './app/chat/chat-room/chat-room.component';
import { NotFoundComponent } from './app/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    SettingsComponent,
    GamesComponent,
    GameCardComponent,
    ShopComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,
    BlogComponent,
    BlogPostListComponent,
    BlogPostDetailComponent,
    ForumComponent,
    ForumCategoryListComponent,
    ForumTopicListComponent,
    ForumTopicDetailComponent,
    ChatComponent,
    ChatRoomComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
