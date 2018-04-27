---
---
# ion-menu-controller



<h2>Methods</h2>
<dl>

<dt><h3>_register()</h3></dt>
<dd></dd>

<dt><h3>_setActiveMenu()</h3></dt>
<dd></dd>

<dt><h3>_setOpen()</h3></dt>
<dd></dd>

<dt><h3>_unregister()</h3></dt>
<dd></dd>

<dt><h3>close()</h3></dt>
<dd>Programatically close the Menu. If no `menuId` is given as the first
argument then it'll close any menu which is open. If a `menuId`
is given then it'll close that exact menu.</dd>

<dt><h3>createAnimation()</h3></dt>
<dd></dd>

<dt><h3>enable()</h3></dt>
<dd>Used to enable or disable a menu. For example, there could be multiple
left menus, but only one of them should be able to be opened at the same
time. If there are multiple menus on the same side, then enabling one menu
will also automatically disable all the others that are on the same side.</dd>

<dt><h3>get()</h3></dt>
<dd>Used to get a menu instance. If a `menuId` is not provided then it'll
return the first menu found. If a `menuId` is `left` or `right`, then
it'll return the enabled menu on that side. Otherwise, if a `menuId` is
provided, then it'll try to find the menu using the menu's `id`
property. If a menu is not found then it'll return `null`.</dd>

<dt><h3>getMenus()</h3></dt>
<dd></dd>

<dt><h3>getOpen()</h3></dt>
<dd></dd>

<dt><h3>isAnimating()</h3></dt>
<dd></dd>

<dt><h3>isEnabled()</h3></dt>
<dd></dd>

<dt><h3>isOpen()</h3></dt>
<dd></dd>

<dt><h3>open()</h3></dt>
<dd>Programatically open the Menu.</dd>

<dt><h3>registerAnimation()</h3></dt>
<dd></dd>

<dt><h3>swipeEnable()</h3></dt>
<dd>Used to enable or disable the ability to swipe open the menu.</dd>

<dt><h3>toggle()</h3></dt>
<dd>Toggle the menu. If it's closed, it will open, and if opened, it
will close.</dd>

</dl>


