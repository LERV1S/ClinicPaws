@extends('layouts.app')

@section('content')
    <div class="container">
        <h1>Resultado de la predicción</h1>
        <p>{{ $prediction['prediction'] }}</p>
    </div>
@endsection
