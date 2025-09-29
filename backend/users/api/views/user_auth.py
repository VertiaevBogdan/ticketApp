from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.middleware.csrf import get_token
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required

def csrf(request):
    return JsonResponse({"csrfToken": get_token(request)})

def login_view(request):
    if request.method == 'POST':
        import json
        data = json.loads(request.body)
        user = authenticate(email=data['email'], password=data['password'])
        if user:
            login(request, user)
            return JsonResponse({'success': True})

        return JsonResponse({'success': False, "error": "Invalid credentials"}, status=404)

def logout_view(request):
    logout(request)
    return JsonResponse({'success': True})