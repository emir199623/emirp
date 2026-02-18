# AliSaParty APK Build Guide (Flutter)

> Bu doküman, AliSaParty Android APK üretimi için gereken adımları açıklar.

## Ön Koşullar
- Flutter SDK (stable)
- Android Studio + Android SDK
- Java 17

## Kurulum
```bash
flutter --version
flutter doctor
```

## Proje Oluşturma (İlk Kurulum)
Flutter iskeleti hazır olduğunda aşağıdaki komut çalıştırılabilir:
```bash
flutter create --org com.alisaparty app
```

Bu komut `apps/mobile/app` altında standart Flutter proje yapısı oluşturur.

## APK Üretimi (Release)
```bash
cd apps/mobile/app
flutter pub get
flutter build apk --release
```

## APK Konumu
- `build/app/outputs/flutter-apk/app-release.apk`

## İmza (Signing)
Üretim için `android/key.properties` ve `android/app/build.gradle` içinde signing config tanımlanmalıdır.
