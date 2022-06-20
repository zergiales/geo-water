<template>
  <div
    class="sidebar" :class="isOpened ? 'open' : ''" :style="cssVars">
    <div
      class="logo-details"
      style="margin: 6px 14px 0 ;"
    >
      <img
        v-if="menuLogo"
        :src="menuLogo"
        alt="menu-logo"
        class="menu-logo icon"
      >
      <div class="logo_name">
        {{ menuTitle }}
      </div>
          <button
            class="bx"
            :class="isOpened ? 'bx-menu-alt-right' : 'bx-menu'"
            id="btn"
            @click="isOpened = !isOpened"
          />
    </div>

    <div class="menu">
      <div>
        <ul
          class="nav-list"
          style="overflow: visible;"
        >
          <span
            v-for="(menuItem, index) in menuItems"
            :key="index"
          >
            <li>
              <router-link to="{path:menuItem.link}">
                <i
                  class="bx"
                  :class="menuItem.icon || 'bx-square-rounded'"
                />
                <span class="links_name">{{ menuItem.name }}</span>
              </router-link>
              <span class="tooltip">{{ menuItem.tooltip || menuItem.name }}</span>
            </li>
          </span>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenuAkahon',
  props: {
    //! Menu settings
    isMenuOpen: {
      type: Boolean,
      default: true,
    },
    menuTitle: {
      type: String,
      default: 'Geo Water',
    },
    menuLogo: {
      type: String,
      default: '',
    },
    menuIcon: {
      type: String,
      // default: require('../assets/img/photo.jpg'),
    },
    esAbierto: {
      type: Boolean,
      default: true,
    },
    menuAbierto: {
      type: String,
      default: '250px',
    },
    menucerrado: {
      type: String,
      default: '0px',
    },

    //! Menu items
    menuItems: {
      type: Array,
      default: () => [
        {
          link: '/home',
          name: 'Inicio',
          tooltip: 'Inicio',
          icon: 'bx-grid-alt',
        },
        {
          link: '/banios',
          name: 'baños',
          tooltip: 'baños',
          icon: 'bx-bath',
        },
        {
          link: '/resenias',
          name: 'reseñas',
          tooltip: 'reseñas',
          icon: 'bx-chat',
        },
        {
          link: '/Ajustes',
          name: 'Ajustes',
          tooltip: 'Ajustes',
          icon: 'bx-cog',
        },
        {
          link: '/Usuario',
          name: 'Usuario',
          tooltip: 'Usuario',
          icon: 'bx-user',
        },
        {
          link: '/',
          name: 'Cerrar Sesion',
          tooltip: 'Cerrar Sesion',
          icon: 'bx-log-out',
        },
      ],
    },
    //! Styles
    bgColor: {
      type: String,
      default: '#3F51B5',
    },
    secondaryColor: {
      type: String,
      default: '#1d1b31',
    },
    homeSectionColor: {
      type: String,
      default: '#e4e9f7',
    },
    logoTitleColor: {
      type: String,
      default: '#fff',
    },
    iconsColor: {
      type: String,
      default: '#fff',
    },
    itemsTooltipColor: {
      type: String,
      default: '#e4e9f7',
    },
    searchInputTextColor: {
      type: String,
      default: '#fff',
    },
    menuItemsHoverColor: {
      type: String,
      default: '#fff',
    },
    menuItemsTextColor: {
      type: String,
      default: '#fff',
    },
    menuFooterTextColor: {
      type: String,
      default: '#fff',
    },
  },
  data() {
    return {
      isOpened: false,
    };
  },
  mounted() {
    /* ciclo de vida en montado para ejecute el menu cuando toque */
    this.isOpened = this.isMenuOpen;
  },
  computed: {
    /* uso de sass para programar el menu */
    cssVars() {
      return {
        '--bg-color': this.bgColor,
        '--secondary-color': this.secondaryColor,
        '--home-section-color': this.homeSectionColor,
        '--logo-title-color': this.logoTitleColor,
        '--icons-color': this.iconsColor,
        '--items-tooltip-color': this.itemsTooltipColor,
        '--serach-input-text-color': this.searchInputTextColor,
        '--menu-items-hover-color': this.menuItemsHoverColor,
        '--menu-items-text-color': this.menuItemsTextColor,
        '--menu-footer-text-color': this.menuFooterTextColor,
      };
    },
  },
  watch: {
    isOpened() {
      window.document.body.style.paddingLeft = this.isOpened;
      window.document.body.style.paddingLeft = this.esAbierto ? this.menuAbierto : this.menucerrado;
    },
  },
};
</script>
<!--Arreglar responsive del menu -->
<style>
  @import url('https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    transition: all 0.5s ease;
  }
  .menu{
    display: flex ;
    flex-direction:column;
    justify-content: space-between;
    flex-grow: 1;
    margin: 10px 9.7px 0px;
  }
  .sidebar {
    position: relative;
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    min-height: min-content;
    /* overflow-y: auto; */
    width: 98px;
    background: var(--bg-color);
    /* padding: 6px 14px 0 14px; */
    z-index: 99;
    transition: all 0.5s ease;
  }
  .sidebar.open {
    width: 250px;
  }
  .sidebar .logo-details {
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
  }
  .sidebar .logo-details .icon {
    opacity: 0;
    transition: all 0.5s ease;
  }
  .sidebar .logo-details .logo_name {
    color: var(--logo-title-color);
    font-size: 20px;
    font-weight: 600;
    opacity: 0;
    transition: all 0.5s ease;
  }
  .sidebar.open .logo-details .icon,
  .sidebar.open .logo-details .logo_name {
    opacity: 1;
  }
  .sidebar .logo-details #btn {
    position: absolute;
    top: 50%;
    right: 0;
    left: 90%;
    transform: translateY(-50%);
    font-size: 22px;
    transition: all 0.4s ease;
    font-size: 23px;
    text-align: center;
    color: var(--logo-title-color);
    cursor: pointer;
    transition: all 0.5s ease-in;
  }
  .sidebar.open .logo-details #btn {
    text-align: right;
  }
  .sidebar i {
    border-radius: 5px 0% 0% 5px;
    color: var(--icons-color);
    height: 60px;
    min-width: 50px;
    font-size: 28px;
    text-align: center;
    line-height: 60px;
  }
  .sidebar .nav-list {
    margin-top: 20px;
    /* margin-bottom: 60px; */
    /* height: 100%; */
    /* min-height: min-content; */
  }
  .sidebar li {
    position: relative;
    margin: 8px -10px;
    list-style: none;
  }
  .sidebar li .tooltip {
    position: absolute;
    top: -20px;
    left: calc(100% + 15px);
    z-index: 3;
    background: var(--items-tooltip-color);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    padding: 6px 12px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 400;
    opacity: 0;
    white-space: nowrap;
    pointer-events: none;
    transition: 0s;
  }
  .sidebar li:hover .tooltip {
    opacity: 1;
    pointer-events: auto;
    transition: all 0.4s ease;
    top: 50%;
    transform: translateY(-50%);
  }
  .sidebar.open li .tooltip {
    display: none;
  }
  .sidebar li a {
    display: flex;
    height: 100%;
    width: 100%;
    border-radius: 5px;
    align-items: center;
    text-decoration: none;
    transition: all 0.4s ease;
    background: var(--bg-color);
  }
  .sidebar li a:hover {
    background: var(--menu-items-hover-color);
    border-radius: 5px 0% 0% 5px;
  }
  .sidebar li a .links_name {
    color: var(--menu-items-text-color);
    font-size: 15px;
    font-weight: 400;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: 0.4s;
  }
  .sidebar.open li a .links_name {
    opacity: 1;
    pointer-events: auto;
  }
  .sidebar li a:hover .links_name,
  .sidebar li a:hover i {
    transition: all 0.5s ease;
    color: var(--bg-color);
  }
  .sidebar li i {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    border-radius: 5px;
  }
  .home-section {
    position: relative;
    background: var(--home-section-color);
    min-height: 100vh;
    top: 0;
    left: 100px;
    width: calc(100% - 78px);
    transition: all 0.5s ease;
    z-index: 2;
  }
  .sidebar.open ~ .home-section {
    left: 250px;
    width: calc(100% - 250px);
  }
  .home-section .text {
    display: inline-block;
    color: var(--bg-color);
    font-size: 25px;
    font-weight: 500;
    margin: 18px;
  }
  .sidebar #btn{
        margin-left:-90px;
    }
  @media (max-width: 420px) {
    .sidebar li .tooltip {
      display: none;
    }

}

</style>
