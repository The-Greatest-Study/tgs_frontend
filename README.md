# react-native 시작하기

## 안드로이드 스튜디오 최신버전 설치

## 안드로이드 환경변수(adb) 설정

- ADB(Android Debug Bridge)란?
  - 간단하게 말해서 PC에서 안드로이드 단말로 명령을 내릴 수 있게 도와주는 도구이다.

(※안드로이드 설치시 특별히 경로를 변경하지 않았다면 adb의 경로는
C:\Users\본인계정명\AppData\Local\Android\sdk\platform-tools 이다.)

- [내컴퓨터] - [속성] - [고급 시스템 설정] - [환경변수]에 들어가서 [시스템 변수]에서 Path클릭 후 [편집] 클릭.

  - 변수 값 맨 뒤에 ;C:\Users\본인계정명\AppData\Local\Android\sdk\platform-tools 를 입력 후 확인을 하면 설정

  - cmd창에서 adb version을 쳐서 확인가능하면 끝~

## 안드로이드 SDK Components Setup

1. Android SDK
2. Android SDK Platform -> API30: Android 11 (R)
3. Performance
4. Android Virtual Device
