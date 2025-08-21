import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 100px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
  width: 100%;
`;

const HeaderWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Navigation = styled.nav`
  flex: 1;
  margin-left: 50px;
`;

const MenuList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 40px;
`;

const MenuItem = styled.li`
  position: relative;
  cursor: pointer;
`;

const MenuLabel = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  padding: 10px 0;
  display: block;
  
  ${props => props.active && `
    color: #007bff;
  `}
`;

const SubmenuList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  list-style: none;
  margin: 0;
  padding: 0;
  min-width: 150px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;
  
  ${MenuItem}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const SubmenuItem = styled.li`
  padding: 10px 15px;
  border-bottom: 1px solid #f1f3f4;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: #f8f9fa;
  }
  
  ${props => props.active && `
    background-color: #333;
    color: white;
  `}
`;

const Header = () => {
  const [activeMenu, setActiveMenu] = useState('menu1');
  const [activeSubMenu, setActiveSubMenu] = useState('submenu2');

  const menuItems = [
    { id: 'menu1', label: '탑', subMenus: ['블라우스', '티', '셔츠', '니트'] },
    { id: 'menu2', label: '아우터', subMenus: ['자켓', '코트', '가디건', '머플러'] },
    { id: 'menu3', label: '팬츠', subMenus: ['청바지', '짧은바지', '긴바지', '레깅스'] },
    { id: 'menu4', label: '악세서리', subMenus: ['귀고리', '목걸이', '반지', '팔찌'] }
  ];

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo>로고</Logo>
        <Navigation>
          <MenuList>
            {menuItems.map((menu) => (
              <MenuItem 
                key={menu.id} 
                onMouseEnter={() => setActiveMenu(menu.id)}
              >
                <MenuLabel active={activeMenu === menu.id}>{menu.label}</MenuLabel>
                <SubmenuList>
                  {menu.subMenus.map((subMenu, index) => (
                    <SubmenuItem 
                      key={index} 
                      active={activeMenu === menu.id && activeSubMenu === `submenu${index + 1}`}
                      onClick={() => setActiveSubMenu(`submenu${index + 1}`)}
                    >
                      {subMenu}
                    </SubmenuItem>
                  ))}
                </SubmenuList>
              </MenuItem>
            ))}
          </MenuList>
        </Navigation>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
