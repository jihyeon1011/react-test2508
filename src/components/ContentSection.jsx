import React from 'react';
import styled from 'styled-components';

const ContentSectionContainer = styled.section`
  min-height: 200px;
  background-color: #ffffff;
  padding: 20px 0;
  width: 100%;
  height: 450px;          
  width: 100%;            
  background-color: #ffffff;
  display: flex;         
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  min-height: 200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding: 0 20px;
`;

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContentBlock = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 15px;
  height: 100%;
`;

const BlockTitle = styled.h3`
  margin: 0 0 15px 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  border-bottom: 2px solid coral;
  padding-bottom: 8px;
`;

const NoticeList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NoticeItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #e9ecef;
  
  &:last-child {
    border-bottom: none;
  }
`;

const NoticeTitle = styled.span`
  font-size: 14px;
  color: #333;
  flex: 1;
`;

const NoticeDate = styled.span`
  font-size: 12px;
  color: #6c757d;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const GalleryItem = styled.div`
  aspect-ratio: 1;
`;

const GalleryPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #e3f2fd, #bbdefb);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #1976d2;
  text-align: center;
  padding: 5px;
`;

const BannerContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BannerPlaceholder = styled.div`
  width: 100%;
  height: 80px;
  background: linear-gradient(45deg, #fff3e0, #ffe0b2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: coral;
  border: 2px dashed #ffb74d;
`;

const ShortcutsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

const ShortcutItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 15px 10px;
  background-color: white;
  border-radius: 6px;
  border: 1px solid #e9ecef;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: #007bff;
  }
`;

const ShortcutIcon = styled.span`
  font-size: 24px;
`;

const ShortcutTitle = styled.span`
  font-size: 12px;
  color: #333;
  text-align: center;
  font-weight: 500;
`;

const ContentSection = () => {
  const notices = [
    { id: 1, title: '공지사항 1', date: '2024-01-15' },
    { id: 2, title: '공지사항 2', date: '2024-01-14' },
    { id: 3, title: '공지사항 3', date: '2024-01-13' }
  ];

  const galleryItems = [
    { id: 1, title: '갤러리 이미지 1' },
    { id: 2, title: '갤러리 이미지 2' },
    { id: 3, title: '갤러리 이미지 3' }
  ];

  const shortcuts = [
    { id: 1, title: '바로가기 1', icon: '🔗' },
    { id: 2, title: '바로가기 2', icon: '📱' },
    { id: 3, title: '바로가기 3', icon: '💻' },
    { id: 4, title: '바로가기 4', icon: '📧' }
  ];

  return (
    <ContentSectionContainer>
      <ContentWrapper>
        <ContentColumn>
          <ContentBlock>
            <BlockTitle>공지사항 (C.1)</BlockTitle>
            <NoticeList>
              {notices.map((notice) => (
                <NoticeItem key={notice.id}>
                  <NoticeTitle>{notice.title}</NoticeTitle>
                  <NoticeDate>{notice.date}</NoticeDate>
                </NoticeItem>
              ))}
            </NoticeList>
          </ContentBlock>

          <ContentBlock>
            <BlockTitle>갤러리 (C.2)</BlockTitle>
            <GalleryGrid>
              {galleryItems.map((item) => (
                <GalleryItem key={item.id}>
                  <GalleryPlaceholder>
                    {item.title}
                  </GalleryPlaceholder>
                </GalleryItem>
              ))}
            </GalleryGrid>
          </ContentBlock>
        </ContentColumn>

        <ContentColumn>
          <ContentBlock>
            <BlockTitle>배너 (C.3)</BlockTitle>
            <BannerContent>
              <BannerPlaceholder>
                배너 이미지 영역
              </BannerPlaceholder>
            </BannerContent>
          </ContentBlock>
        </ContentColumn>

        <ContentColumn>
          <ContentBlock>
            <BlockTitle>바로가기 (C.4)</BlockTitle>
            <ShortcutsGrid>
              {shortcuts.map((shortcut) => (
                <ShortcutItem key={shortcut.id}>
                  <ShortcutIcon>{shortcut.icon}</ShortcutIcon>
                  <ShortcutTitle>{shortcut.title}</ShortcutTitle>
                </ShortcutItem>
              ))}
            </ShortcutsGrid>
          </ContentBlock>
        </ContentColumn>
      </ContentWrapper>
    </ContentSectionContainer>
  );
};

export default ContentSection;
