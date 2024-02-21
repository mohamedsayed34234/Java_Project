import 'package:ASWAN AGRO SMART/data/farm/models/News.dart';

import 'newsAPI.dart';

class Repository {
  final moviesApiProvider = NewsApiProvider();
  Future<List<Article>> fetchAllNews({String category = ''}) =>
      moviesApiProvider.fetchNewsList(category: category);
}
