import 'package:ASWAN AGRO SMART/data/farm/models/Forecast.dart';
import 'package:ASWAN AGRO SMART/data/farm/models/Location.dart';

abstract class WeatherApi {
  Future<Forecast> getWeather(Location location);
  Future<Location> getLocation(String city);
}
