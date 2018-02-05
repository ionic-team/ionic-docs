import { Component } from '@stencil/core';

@Component({
  tag: 'site-search',
  styleUrl: 'site-search.scss'
})
export class SiteSearch {
  render() {
    return [
      <form>
        <input type="search" name="q" placeholder="Search docs" autocomplete="off"/>
        <i class="search-icon"></i>
      </form>

    ]
  }
}