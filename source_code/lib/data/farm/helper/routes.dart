import 'package:ASWAN AGRO SMART/ui/farm/news/news_home.dart';
import 'package:ASWAN AGRO SMART/ui/farm/news_details/newsDetailPage.dart';
import 'package:flutter/material.dart';

class Routes {
  static Map<String, WidgetBuilder> getRoute() {
    return <String, WidgetBuilder>{
      '/home': (_) => HomePage(),
      '/detail': (_) => NewsDetailPage(),
    };
  }
}
